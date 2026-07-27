import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-alternatives');
}

export default function RuthlessChaosAlternativesKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-alternatives" />;
}
