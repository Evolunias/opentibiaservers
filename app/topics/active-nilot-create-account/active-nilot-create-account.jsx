import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-nilot-create-account');
}

export default function ActiveNilotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="active-nilot-create-account" />;
}
