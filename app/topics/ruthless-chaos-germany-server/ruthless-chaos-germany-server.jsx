import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-germany-server');
}

export default function RuthlessChaosGermanyServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-germany-server" />;
}
