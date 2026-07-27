import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibijka-create-account');
}

export default function LowrateTibijkaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibijka-create-account" />;
}
