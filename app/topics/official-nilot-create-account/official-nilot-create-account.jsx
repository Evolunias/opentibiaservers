import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-nilot-create-account');
}

export default function OfficialNilotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="official-nilot-create-account" />;
}
