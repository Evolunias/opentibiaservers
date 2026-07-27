import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-nilot-wiki');
}

export default function NewSeasonNilotWikiKeywordPage() {
  return <StaticKeywordPage slug="new-season-nilot-wiki" />;
}
