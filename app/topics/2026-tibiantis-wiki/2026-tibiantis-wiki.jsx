import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-tibiantis-wiki');
}

export default function Keyword2026TibiantisWikiKeywordPage() {
  return <StaticKeywordPage slug="2026-tibiantis-wiki" />;
}
