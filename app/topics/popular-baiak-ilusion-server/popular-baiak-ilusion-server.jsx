import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-baiak-ilusion-server');
}

export default function PopularBaiakIlusionServerKeywordPage() {
  return <StaticKeywordPage slug="popular-baiak-ilusion-server" />;
}
