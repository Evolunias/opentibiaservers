import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-canob-create-account');
}

export default function CustomCanobCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="custom-canob-create-account" />;
}
