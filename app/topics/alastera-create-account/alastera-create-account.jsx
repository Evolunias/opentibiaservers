import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-create-account');
}

export default function AlasteraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="alastera-create-account" />;
}
