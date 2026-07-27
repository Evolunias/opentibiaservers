import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-oxygenot-create-account');
}

export default function TopOxygenotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="top-oxygenot-create-account" />;
}
