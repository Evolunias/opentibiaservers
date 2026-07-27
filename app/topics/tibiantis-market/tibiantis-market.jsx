import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-market');
}

export default function TibiantisMarketKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-market" />;
}
