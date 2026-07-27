import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-baiak-ilusion-login');
}

export default function NoResetBaiakIlusionLoginKeywordPage() {
  return <StaticKeywordPage slug="no-reset-baiak-ilusion-login" />;
}
