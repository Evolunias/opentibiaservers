import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-alastera-create-account');
}

export default function PopularAlasteraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="popular-alastera-create-account" />;
}
