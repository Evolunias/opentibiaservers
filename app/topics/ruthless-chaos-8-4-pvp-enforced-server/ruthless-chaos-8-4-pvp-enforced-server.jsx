import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-8-4-pvp-enforced-server');
}

export default function RuthlessChaos84PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-8-4-pvp-enforced-server" />;
}
