import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-12-pvp-server');
}

export default function Madnessalive12PvpServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-12-pvp-server" />;
}
