import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-market');
}

export default function DemolidoresMarketKeywordPage() {
  return <StaticKeywordPage slug="demolidores-market" />;
}
