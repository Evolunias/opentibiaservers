import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-canob-create-account');
}

export default function LowrateCanobCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="lowrate-canob-create-account" />;
}
