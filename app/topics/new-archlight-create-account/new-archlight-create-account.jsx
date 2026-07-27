import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-archlight-create-account');
}

export default function NewArchlightCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-archlight-create-account" />;
}
