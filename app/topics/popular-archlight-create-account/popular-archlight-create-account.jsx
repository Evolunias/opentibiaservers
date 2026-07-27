import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-archlight-create-account');
}

export default function PopularArchlightCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="popular-archlight-create-account" />;
}
