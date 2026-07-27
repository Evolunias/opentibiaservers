import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-archlight-create-account');
}

export default function CustomArchlightCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="custom-archlight-create-account" />;
}
