import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-exp-rate');
}

export default function DemolidoresExpRateKeywordPage() {
  return <StaticKeywordPage slug="demolidores-exp-rate" />;
}
