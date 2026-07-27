import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-create-account');
}

export default function TibijkaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="tibijka-create-account" />;
}
