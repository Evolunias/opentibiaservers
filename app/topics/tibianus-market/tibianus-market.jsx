import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-market');
}

export default function TibianusMarketKeywordPage() {
  return <StaticKeywordPage slug="tibianus-market" />;
}
