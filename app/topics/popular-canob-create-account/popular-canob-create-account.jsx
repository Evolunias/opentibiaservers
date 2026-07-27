import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-canob-create-account');
}

export default function PopularCanobCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="popular-canob-create-account" />;
}
