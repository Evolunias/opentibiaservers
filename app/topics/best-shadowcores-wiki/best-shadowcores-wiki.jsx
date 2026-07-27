import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-shadowcores-wiki');
}

export default function BestShadowcoresWikiKeywordPage() {
  return <StaticKeywordPage slug="best-shadowcores-wiki" />;
}
