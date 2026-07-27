import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-nto-star-create-account');
}

export default function CustomNtoStarCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="custom-nto-star-create-account" />;
}
