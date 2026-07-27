import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-shadowcores-wiki');
}

export default function CustomShadowcoresWikiKeywordPage() {
  return <StaticKeywordPage slug="custom-shadowcores-wiki" />;
}
