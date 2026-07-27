import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-alastera-create-account');
}

export default function ActiveAlasteraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="active-alastera-create-account" />;
}
