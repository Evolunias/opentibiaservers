import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-tibiame-wiki');
}

export default function Keyword2026TibiameWikiKeywordPage() {
  return <StaticKeywordPage slug="2026-tibiame-wiki" />;
}
