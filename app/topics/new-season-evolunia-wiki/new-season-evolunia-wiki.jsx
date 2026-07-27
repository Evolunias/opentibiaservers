import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-evolunia-wiki');
}

export default function NewSeasonEvoluniaWikiKeywordPage() {
  return <StaticKeywordPage slug="new-season-evolunia-wiki" />;
}
