import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-archlight-create-account');
}

export default function OfficialArchlightCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="official-archlight-create-account" />;
}
