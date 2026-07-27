import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-oldera-create-account');
}

export default function NewOlderaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-oldera-create-account" />;
}
