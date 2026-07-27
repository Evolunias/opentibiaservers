import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-15-pvp-enforced-server');
}

export default function RuthlessChaos15PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-15-pvp-enforced-server" />;
}
