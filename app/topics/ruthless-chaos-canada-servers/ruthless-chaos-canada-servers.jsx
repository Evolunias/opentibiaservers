import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-canada-servers');
}

export default function RuthlessChaosCanadaServersKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-canada-servers" />;
}
