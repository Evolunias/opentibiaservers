import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-7-6-pvp-enforced-server');
}

export default function RuthlessChaos76PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-7-6-pvp-enforced-server" />;
}
