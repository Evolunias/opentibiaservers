import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-eternal-odyssey-wiki');
}

export default function NewSeasonEternalOdysseyWikiKeywordPage() {
  return <StaticKeywordPage slug="new-season-eternal-odyssey-wiki" />;
}
