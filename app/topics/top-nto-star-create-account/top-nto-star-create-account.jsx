import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-nto-star-create-account');
}

export default function TopNtoStarCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="top-nto-star-create-account" />;
}
