import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-market');
}

export default function NepreniaMarketKeywordPage() {
  return <StaticKeywordPage slug="neprenia-market" />;
}
