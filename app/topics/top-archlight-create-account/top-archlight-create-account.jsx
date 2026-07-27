import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-archlight-create-account');
}

export default function TopArchlightCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="top-archlight-create-account" />;
}
