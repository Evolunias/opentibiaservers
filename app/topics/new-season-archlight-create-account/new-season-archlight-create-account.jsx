import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-archlight-create-account');
}

export default function NewSeasonArchlightCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-season-archlight-create-account" />;
}
