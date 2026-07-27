import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibijka-create-account');
}

export default function FreshStartTibijkaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibijka-create-account" />;
}
