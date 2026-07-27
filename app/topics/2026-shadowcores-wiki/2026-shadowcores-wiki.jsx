import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-shadowcores-wiki');
}

export default function Keyword2026ShadowcoresWikiKeywordPage() {
  return <StaticKeywordPage slug="2026-shadowcores-wiki" />;
}
