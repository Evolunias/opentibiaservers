import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-nto-star-create-account');
}

export default function FreshStartNtoStarCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-nto-star-create-account" />;
}
