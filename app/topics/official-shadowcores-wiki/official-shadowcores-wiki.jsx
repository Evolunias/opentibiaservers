import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-shadowcores-wiki');
}

export default function OfficialShadowcoresWikiKeywordPage() {
  return <StaticKeywordPage slug="official-shadowcores-wiki" />;
}
