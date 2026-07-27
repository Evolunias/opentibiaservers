import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-exp-rate');
}

export default function AlasteraExpRateKeywordPage() {
  return <StaticKeywordPage slug="alastera-exp-rate" />;
}
