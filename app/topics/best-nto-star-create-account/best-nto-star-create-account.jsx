import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-nto-star-create-account');
}

export default function BestNtoStarCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="best-nto-star-create-account" />;
}
