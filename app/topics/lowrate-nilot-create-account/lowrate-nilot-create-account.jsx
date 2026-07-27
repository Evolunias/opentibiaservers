import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-nilot-create-account');
}

export default function LowrateNilotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="lowrate-nilot-create-account" />;
}
