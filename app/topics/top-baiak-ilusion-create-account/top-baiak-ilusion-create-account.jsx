import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-baiak-ilusion-create-account');
}

export default function TopBaiakIlusionCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="top-baiak-ilusion-create-account" />;
}
