import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-8-1-pvp-enforced-server');
}

export default function RuthlessChaos81PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-8-1-pvp-enforced-server" />;
}
