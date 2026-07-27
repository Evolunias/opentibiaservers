import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-nilot-create-account');
}

export default function NewSeasonNilotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-season-nilot-create-account" />;
}
