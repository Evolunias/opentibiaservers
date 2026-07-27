import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-exp-rate');
}

export default function KasteriaExpRateKeywordPage() {
  return <StaticKeywordPage slug="kasteria-exp-rate" />;
}
