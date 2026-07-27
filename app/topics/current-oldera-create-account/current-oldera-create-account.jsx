import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-oldera-create-account');
}

export default function CurrentOlderaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="current-oldera-create-account" />;
}
