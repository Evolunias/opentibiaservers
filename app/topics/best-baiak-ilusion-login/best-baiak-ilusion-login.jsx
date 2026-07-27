import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-baiak-ilusion-login');
}

export default function BestBaiakIlusionLoginKeywordPage() {
  return <StaticKeywordPage slug="best-baiak-ilusion-login" />;
}
