import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-exp-rate');
}

export default function NtoStarExpRateKeywordPage() {
  return <StaticKeywordPage slug="nto-star-exp-rate" />;
}
