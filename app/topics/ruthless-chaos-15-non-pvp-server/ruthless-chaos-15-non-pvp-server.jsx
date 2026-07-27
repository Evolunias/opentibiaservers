import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-15-non-pvp-server');
}

export default function RuthlessChaos15NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-15-non-pvp-server" />;
}
