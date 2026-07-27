import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiame-wiki');
}

export default function BestTibiameWikiKeywordPage() {
  return <StaticKeywordPage slug="best-tibiame-wiki" />;
}
