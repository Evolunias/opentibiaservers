import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-nto-star-create-account');
}

export default function ActiveNtoStarCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="active-nto-star-create-account" />;
}
