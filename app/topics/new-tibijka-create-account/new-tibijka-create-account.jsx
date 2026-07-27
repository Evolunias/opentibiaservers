import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibijka-create-account');
}

export default function NewTibijkaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-tibijka-create-account" />;
}
