import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-8-6-pvp-enforced-server');
}

export default function RuthlessChaos86PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-8-6-pvp-enforced-server" />;
}
