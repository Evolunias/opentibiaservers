import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-market');
}

export default function TibiascapeMarketKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-market" />;
}
