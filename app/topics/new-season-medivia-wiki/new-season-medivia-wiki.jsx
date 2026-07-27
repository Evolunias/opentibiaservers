import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-medivia-wiki');
}

export default function NewSeasonMediviaWikiKeywordPage() {
  return <StaticKeywordPage slug="new-season-medivia-wiki" />;
}
