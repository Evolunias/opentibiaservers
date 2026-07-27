import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-9-6-non-pvp-server');
}

export default function RuthlessChaos96NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-9-6-non-pvp-server" />;
}
