import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-10-98-pvp-server');
}

export default function Madnessalive1098PvpServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-10-98-pvp-server" />;
}
