import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-market');
}

export default function EvoleraMarketKeywordPage() {
  return <StaticKeywordPage slug="evolera-market" />;
}
