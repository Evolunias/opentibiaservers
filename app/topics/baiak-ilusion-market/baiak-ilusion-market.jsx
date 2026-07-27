import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-market');
}

export default function BaiakIlusionMarketKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-market" />;
}
