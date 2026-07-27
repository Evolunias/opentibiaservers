import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-tibiascape-wiki');
}

export default function Keyword2026TibiascapeWikiKeywordPage() {
  return <StaticKeywordPage slug="2026-tibiascape-wiki" />;
}
