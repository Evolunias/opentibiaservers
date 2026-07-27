import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-12-non-pvp-server');
}

export default function Madnessalive12NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-12-non-pvp-server" />;
}
