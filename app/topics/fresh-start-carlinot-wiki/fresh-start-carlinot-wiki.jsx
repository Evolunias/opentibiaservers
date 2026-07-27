import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-carlinot-wiki');
}

export default function FreshStartCarlinotWikiKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-carlinot-wiki" />;
}
