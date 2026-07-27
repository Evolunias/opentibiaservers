import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-7-72-pvp-server');
}

export default function Madnessalive772PvpServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-7-72-pvp-server" />;
}
