import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-12-pvp-enforced-server');
}

export default function Madnessalive12PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-12-pvp-enforced-server" />;
}
