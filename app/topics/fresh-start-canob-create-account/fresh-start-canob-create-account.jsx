import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-canob-create-account');
}

export default function FreshStartCanobCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-canob-create-account" />;
}
