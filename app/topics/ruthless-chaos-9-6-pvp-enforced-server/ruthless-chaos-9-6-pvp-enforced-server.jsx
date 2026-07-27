import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-9-6-pvp-enforced-server');
}

export default function RuthlessChaos96PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-9-6-pvp-enforced-server" />;
}
