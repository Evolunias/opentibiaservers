import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-market');
}

export default function ShadowcoresMarketKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-market" />;
}
