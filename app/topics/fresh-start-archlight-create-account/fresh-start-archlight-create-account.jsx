import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-archlight-create-account');
}

export default function FreshStartArchlightCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-archlight-create-account" />;
}
