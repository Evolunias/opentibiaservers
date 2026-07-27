import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-europe-server');
}

export default function RuthlessChaosEuropeServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-europe-server" />;
}
