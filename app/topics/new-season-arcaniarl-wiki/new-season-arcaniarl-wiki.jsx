import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-arcaniarl-wiki');
}

export default function NewSeasonArcaniarlWikiKeywordPage() {
  return <StaticKeywordPage slug="new-season-arcaniarl-wiki" />;
}
