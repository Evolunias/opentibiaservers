import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-shadowcores-wiki');
}

export default function TopShadowcoresWikiKeywordPage() {
  return <StaticKeywordPage slug="top-shadowcores-wiki" />;
}
