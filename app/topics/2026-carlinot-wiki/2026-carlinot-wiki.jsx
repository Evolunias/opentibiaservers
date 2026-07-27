import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-carlinot-wiki');
}

export default function Keyword2026CarlinotWikiKeywordPage() {
  return <StaticKeywordPage slug="2026-carlinot-wiki" />;
}
