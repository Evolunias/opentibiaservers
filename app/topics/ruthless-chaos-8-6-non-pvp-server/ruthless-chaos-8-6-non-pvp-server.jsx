import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-8-6-non-pvp-server');
}

export default function RuthlessChaos86NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-8-6-non-pvp-server" />;
}
