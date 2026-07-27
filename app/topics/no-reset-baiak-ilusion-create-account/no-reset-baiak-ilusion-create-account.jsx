import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-baiak-ilusion-create-account');
}

export default function NoResetBaiakIlusionCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="no-reset-baiak-ilusion-create-account" />;
}
