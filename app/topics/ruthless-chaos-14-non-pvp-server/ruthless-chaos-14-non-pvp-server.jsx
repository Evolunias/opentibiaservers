import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-14-non-pvp-server');
}

export default function RuthlessChaos14NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-14-non-pvp-server" />;
}
