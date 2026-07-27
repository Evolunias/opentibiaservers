import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-market');
}

export default function HarmoniaOtMarketKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-market" />;
}
