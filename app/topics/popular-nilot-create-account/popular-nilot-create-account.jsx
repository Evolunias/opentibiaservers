import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-nilot-create-account');
}

export default function PopularNilotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="popular-nilot-create-account" />;
}
