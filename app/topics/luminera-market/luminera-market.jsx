import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-market');
}

export default function LumineraMarketKeywordPage() {
  return <StaticKeywordPage slug="luminera-market" />;
}
