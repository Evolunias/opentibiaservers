import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-nto-star-create-account');
}

export default function OfficialNtoStarCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="official-nto-star-create-account" />;
}
