import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-yurots-create-account');
}

export default function LowrateYurotsCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="lowrate-yurots-create-account" />;
}
