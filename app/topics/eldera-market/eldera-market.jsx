import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-market');
}

export default function ElderaMarketKeywordPage() {
  return <StaticKeywordPage slug="eldera-market" />;
}
