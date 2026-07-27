import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-14-pvp-enforced-server');
}

export default function RuthlessChaos14PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-14-pvp-enforced-server" />;
}
