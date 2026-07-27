import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-shadowcores-wiki');
}

export default function NewSeasonShadowcoresWikiKeywordPage() {
  return <StaticKeywordPage slug="new-season-shadowcores-wiki" />;
}
