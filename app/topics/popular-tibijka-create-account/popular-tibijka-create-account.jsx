import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibijka-create-account');
}

export default function PopularTibijkaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="popular-tibijka-create-account" />;
}
