import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-nilot-create-account');
}

export default function TopNilotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="top-nilot-create-account" />;
}
