import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-alastera-create-account');
}

export default function BestAlasteraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="best-alastera-create-account" />;
}
