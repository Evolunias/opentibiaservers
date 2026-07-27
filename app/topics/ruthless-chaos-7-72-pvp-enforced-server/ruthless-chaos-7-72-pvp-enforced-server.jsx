import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-7-72-pvp-enforced-server');
}

export default function RuthlessChaos772PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-7-72-pvp-enforced-server" />;
}
