import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-exp-rate');
}

export default function MidhemExpRateKeywordPage() {
  return <StaticKeywordPage slug="midhem-exp-rate" />;
}
