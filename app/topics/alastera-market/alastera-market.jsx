import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-market');
}

export default function AlasteraMarketKeywordPage() {
  return <StaticKeywordPage slug="alastera-market" />;
}
