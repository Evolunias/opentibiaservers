import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-archlight-create-account');
}

export default function BestArchlightCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="best-archlight-create-account" />;
}
