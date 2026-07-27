import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-nilot-create-account');
}

export default function BestNilotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="best-nilot-create-account" />;
}
