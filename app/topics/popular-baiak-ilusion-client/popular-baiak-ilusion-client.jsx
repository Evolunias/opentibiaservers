import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-baiak-ilusion-client');
}

export default function PopularBaiakIlusionClientKeywordPage() {
  return <StaticKeywordPage slug="popular-baiak-ilusion-client" />;
}
