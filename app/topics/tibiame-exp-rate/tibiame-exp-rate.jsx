import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-exp-rate');
}

export default function TibiameExpRateKeywordPage() {
  return <StaticKeywordPage slug="tibiame-exp-rate" />;
}
