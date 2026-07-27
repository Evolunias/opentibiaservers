import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-baiak-ilusion-client');
}

export default function BestBaiakIlusionClientKeywordPage() {
  return <StaticKeywordPage slug="best-baiak-ilusion-client" />;
}
