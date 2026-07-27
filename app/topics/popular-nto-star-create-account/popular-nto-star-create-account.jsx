import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-nto-star-create-account');
}

export default function PopularNtoStarCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="popular-nto-star-create-account" />;
}
