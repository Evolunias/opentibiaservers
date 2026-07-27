import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-baiak-ilusion-login');
}

export default function CurrentBaiakIlusionLoginKeywordPage() {
  return <StaticKeywordPage slug="current-baiak-ilusion-login" />;
}
