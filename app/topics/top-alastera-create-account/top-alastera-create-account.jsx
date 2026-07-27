import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-alastera-create-account');
}

export default function TopAlasteraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="top-alastera-create-account" />;
}
