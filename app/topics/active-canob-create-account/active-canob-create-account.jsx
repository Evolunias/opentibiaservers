import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-canob-create-account');
}

export default function ActiveCanobCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="active-canob-create-account" />;
}
