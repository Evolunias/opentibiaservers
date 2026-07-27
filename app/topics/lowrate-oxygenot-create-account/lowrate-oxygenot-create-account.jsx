import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-oxygenot-create-account');
}

export default function LowrateOxygenotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="lowrate-oxygenot-create-account" />;
}
