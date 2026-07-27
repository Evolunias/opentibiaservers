import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-baiak-ilusion-login');
}

export default function NewBaiakIlusionLoginKeywordPage() {
  return <StaticKeywordPage slug="new-baiak-ilusion-login" />;
}
