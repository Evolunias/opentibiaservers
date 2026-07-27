import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-14-pvp-server');
}

export default function Madnessalive14PvpServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-14-pvp-server" />;
}
