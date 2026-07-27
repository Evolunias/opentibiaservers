import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-exp-rate');
}

export default function TibiascapeExpRateKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-exp-rate" />;
}
