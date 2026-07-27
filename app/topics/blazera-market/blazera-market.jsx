import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-market');
}

export default function BlazeraMarketKeywordPage() {
  return <StaticKeywordPage slug="blazera-market" />;
}
