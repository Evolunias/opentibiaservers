import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiantis-wiki');
}

export default function BestTibiantisWikiKeywordPage() {
  return <StaticKeywordPage slug="best-tibiantis-wiki" />;
}
