import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-canob-create-account');
}

export default function TopCanobCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="top-canob-create-account" />;
}
