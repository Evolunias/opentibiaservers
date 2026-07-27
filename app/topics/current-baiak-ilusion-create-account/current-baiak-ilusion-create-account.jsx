import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-baiak-ilusion-create-account');
}

export default function CurrentBaiakIlusionCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="current-baiak-ilusion-create-account" />;
}
