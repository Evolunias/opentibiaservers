import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-baiak-ilusion-create-account');
}

export default function PopularBaiakIlusionCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="popular-baiak-ilusion-create-account" />;
}
