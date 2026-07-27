import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-baiak-ilusion-login');
}

export default function ActiveBaiakIlusionLoginKeywordPage() {
  return <StaticKeywordPage slug="active-baiak-ilusion-login" />;
}
