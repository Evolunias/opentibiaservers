import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-oldera-create-account');
}

export default function BestOlderaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="best-oldera-create-account" />;
}
