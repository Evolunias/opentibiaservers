import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-baiak-ilusion-login');
}

export default function CustomBaiakIlusionLoginKeywordPage() {
  return <StaticKeywordPage slug="custom-baiak-ilusion-login" />;
}
