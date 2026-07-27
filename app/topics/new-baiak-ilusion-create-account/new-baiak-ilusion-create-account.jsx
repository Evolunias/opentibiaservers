import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-baiak-ilusion-create-account');
}

export default function NewBaiakIlusionCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-baiak-ilusion-create-account" />;
}
