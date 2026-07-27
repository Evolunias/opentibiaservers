import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-alastera-create-account');
}

export default function CustomAlasteraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="custom-alastera-create-account" />;
}
