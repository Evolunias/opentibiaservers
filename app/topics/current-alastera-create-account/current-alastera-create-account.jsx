import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-alastera-create-account');
}

export default function CurrentAlasteraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="current-alastera-create-account" />;
}
