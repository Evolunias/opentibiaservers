import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-market');
}

export default function CalmeraOtMarketKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-market" />;
}
