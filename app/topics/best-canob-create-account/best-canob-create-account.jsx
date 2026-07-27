import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-canob-create-account');
}

export default function BestCanobCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="best-canob-create-account" />;
}
