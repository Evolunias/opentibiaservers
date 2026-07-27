import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-nilot-create-account');
}

export default function FreshStartNilotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-nilot-create-account" />;
}
