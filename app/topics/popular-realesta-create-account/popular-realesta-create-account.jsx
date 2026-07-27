import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-realesta-create-account');
}

export default function PopularRealestaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="popular-realesta-create-account" />;
}
