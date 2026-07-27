import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-nilot-create-account');
}

export default function NewNilotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-nilot-create-account" />;
}
