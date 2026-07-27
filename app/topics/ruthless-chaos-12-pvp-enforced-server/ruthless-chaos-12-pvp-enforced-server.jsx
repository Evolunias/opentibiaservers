import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-12-pvp-enforced-server');
}

export default function RuthlessChaos12PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-12-pvp-enforced-server" />;
}
