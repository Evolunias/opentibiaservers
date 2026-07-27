import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-xanteria-wiki');
}

export default function NewSeasonXanteriaWikiKeywordPage() {
  return <StaticKeywordPage slug="new-season-xanteria-wiki" />;
}
