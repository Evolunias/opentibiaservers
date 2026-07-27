import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-baiak-ilusion-login');
}

export default function TopBaiakIlusionLoginKeywordPage() {
  return <StaticKeywordPage slug="top-baiak-ilusion-login" />;
}
