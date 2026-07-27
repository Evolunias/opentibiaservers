import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-7-6-non-pvp-server');
}

export default function RuthlessChaos76NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-7-6-non-pvp-server" />;
}
