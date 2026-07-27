import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-europe-servers');
}

export default function RuthlessChaosEuropeServersKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-europe-servers" />;
}
