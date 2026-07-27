import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiame-wiki');
}

export default function NewSeasonTibiameWikiKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiame-wiki" />;
}
