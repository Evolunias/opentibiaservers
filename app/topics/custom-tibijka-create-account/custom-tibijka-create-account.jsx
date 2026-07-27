import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibijka-create-account');
}

export default function CustomTibijkaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="custom-tibijka-create-account" />;
}
