import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-nto-star-create-account');
}

export default function CurrentNtoStarCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="current-nto-star-create-account" />;
}
