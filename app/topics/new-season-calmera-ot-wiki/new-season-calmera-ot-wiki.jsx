import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-calmera-ot-wiki');
}

export default function NewSeasonCalmeraOtWikiKeywordPage() {
  return <StaticKeywordPage slug="new-season-calmera-ot-wiki" />;
}
