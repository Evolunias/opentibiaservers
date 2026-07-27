import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibijka-create-account');
}

export default function TopTibijkaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="top-tibijka-create-account" />;
}
