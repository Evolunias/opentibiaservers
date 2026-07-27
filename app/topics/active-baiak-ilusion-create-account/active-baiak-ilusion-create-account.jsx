import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-baiak-ilusion-create-account');
}

export default function ActiveBaiakIlusionCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="active-baiak-ilusion-create-account" />;
}
