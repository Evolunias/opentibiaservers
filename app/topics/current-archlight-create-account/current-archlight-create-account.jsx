import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-archlight-create-account');
}

export default function CurrentArchlightCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="current-archlight-create-account" />;
}
