import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-canob-create-account');
}

export default function NewCanobCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-canob-create-account" />;
}
