import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-archlight-create-account');
}

export default function ActiveArchlightCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="active-archlight-create-account" />;
}
