import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-shadowcores-wiki');
}

export default function ActiveShadowcoresWikiKeywordPage() {
  return <StaticKeywordPage slug="active-shadowcores-wiki" />;
}
