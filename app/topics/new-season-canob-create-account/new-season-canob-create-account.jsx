import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-canob-create-account');
}

export default function NewSeasonCanobCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-season-canob-create-account" />;
}
