import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-create-account');
}

export default function CanobCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="canob-create-account" />;
}
