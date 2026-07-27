import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-shadowcores-wiki');
}

export default function LowrateShadowcoresWikiKeywordPage() {
  return <StaticKeywordPage slug="lowrate-shadowcores-wiki" />;
}
