import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-baiak-ilusion-login');
}

export default function PopularBaiakIlusionLoginKeywordPage() {
  return <StaticKeywordPage slug="popular-baiak-ilusion-login" />;
}
