import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-alastera-create-account');
}

export default function NewAlasteraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-alastera-create-account" />;
}
