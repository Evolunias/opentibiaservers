import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-create-account');
}

export default function NtoStarCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="nto-star-create-account" />;
}
