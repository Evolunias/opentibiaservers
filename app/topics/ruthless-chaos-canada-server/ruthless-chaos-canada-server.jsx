import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-canada-server');
}

export default function RuthlessChaosCanadaServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-canada-server" />;
}
