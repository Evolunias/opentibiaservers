import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-oldera-create-account');
}

export default function FreshStartOlderaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-oldera-create-account" />;
}
