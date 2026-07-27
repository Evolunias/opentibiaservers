import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-13-pvp-enforced-server');
}

export default function RuthlessChaos13PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-13-pvp-enforced-server" />;
}
