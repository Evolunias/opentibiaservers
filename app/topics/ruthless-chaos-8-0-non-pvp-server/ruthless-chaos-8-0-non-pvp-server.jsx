import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-8-0-non-pvp-server');
}

export default function RuthlessChaos80NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-8-0-non-pvp-server" />;
}
