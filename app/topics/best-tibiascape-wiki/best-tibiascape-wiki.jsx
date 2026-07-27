import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiascape-wiki');
}

export default function BestTibiascapeWikiKeywordPage() {
  return <StaticKeywordPage slug="best-tibiascape-wiki" />;
}
