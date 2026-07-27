import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-market');
}

export default function NostaltherMarketKeywordPage() {
  return <StaticKeywordPage slug="nostalther-market" />;
}
