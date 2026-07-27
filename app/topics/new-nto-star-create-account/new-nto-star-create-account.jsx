import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-nto-star-create-account');
}

export default function NewNtoStarCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-nto-star-create-account" />;
}
