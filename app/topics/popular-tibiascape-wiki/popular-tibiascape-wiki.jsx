import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiascape-wiki');
}

export default function PopularTibiascapeWikiKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiascape-wiki" />;
}
