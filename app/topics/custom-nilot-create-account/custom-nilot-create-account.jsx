import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-nilot-create-account');
}

export default function CustomNilotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="custom-nilot-create-account" />;
}
