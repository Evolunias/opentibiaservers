import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-canob-create-account');
}

export default function CurrentCanobCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="current-canob-create-account" />;
}
