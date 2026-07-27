import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-exp-rate');
}

export default function TibijkaExpRateKeywordPage() {
  return <StaticKeywordPage slug="tibijka-exp-rate" />;
}
