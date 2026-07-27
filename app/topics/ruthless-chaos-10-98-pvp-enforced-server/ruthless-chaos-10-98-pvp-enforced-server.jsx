import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-10-98-pvp-enforced-server');
}

export default function RuthlessChaos1098PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-10-98-pvp-enforced-server" />;
}
