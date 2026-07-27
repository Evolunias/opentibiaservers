import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-nilot-create-account');
}

export default function CurrentNilotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="current-nilot-create-account" />;
}
