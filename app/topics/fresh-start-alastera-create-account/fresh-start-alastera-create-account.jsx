import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-alastera-create-account');
}

export default function FreshStartAlasteraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-alastera-create-account" />;
}
