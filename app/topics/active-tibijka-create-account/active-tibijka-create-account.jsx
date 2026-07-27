import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibijka-create-account');
}

export default function ActiveTibijkaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="active-tibijka-create-account" />;
}
