import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-thaisot-create-account');
}

export default function LowrateThaisotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="lowrate-thaisot-create-account" />;
}
