import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-create-account');
}

export default function NilotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="nilot-create-account" />;
}
