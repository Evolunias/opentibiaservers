import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-arcaniarl-create-account');
}

export default function NewSeasonArcaniarlCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-season-arcaniarl-create-account" />;
}
