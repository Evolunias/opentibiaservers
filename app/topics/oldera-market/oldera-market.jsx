import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-market');
}

export default function OlderaMarketKeywordPage() {
  return <StaticKeywordPage slug="oldera-market" />;
}
