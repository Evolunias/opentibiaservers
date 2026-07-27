import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-shadowcores-wiki');
}

export default function PopularShadowcoresWikiKeywordPage() {
  return <StaticKeywordPage slug="popular-shadowcores-wiki" />;
}
