import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-exp-rate');
}

export default function TibiantisExpRateKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-exp-rate" />;
}
