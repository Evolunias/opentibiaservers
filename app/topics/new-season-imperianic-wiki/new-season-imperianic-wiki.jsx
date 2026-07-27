import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-imperianic-wiki');
}

export default function NewSeasonImperianicWikiKeywordPage() {
  return <StaticKeywordPage slug="new-season-imperianic-wiki" />;
}
