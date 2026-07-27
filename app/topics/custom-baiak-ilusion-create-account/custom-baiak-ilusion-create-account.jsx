import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-baiak-ilusion-create-account');
}

export default function CustomBaiakIlusionCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="custom-baiak-ilusion-create-account" />;
}
