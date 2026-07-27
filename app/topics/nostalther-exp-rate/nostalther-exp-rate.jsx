import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-exp-rate');
}

export default function NostaltherExpRateKeywordPage() {
  return <StaticKeywordPage slug="nostalther-exp-rate" />;
}
