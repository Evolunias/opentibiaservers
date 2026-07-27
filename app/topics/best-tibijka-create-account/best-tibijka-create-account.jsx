import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibijka-create-account');
}

export default function BestTibijkaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="best-tibijka-create-account" />;
}
