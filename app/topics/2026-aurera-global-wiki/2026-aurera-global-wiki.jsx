import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-aurera-global-wiki');
}

export default function Keyword2026AureraGlobalWikiKeywordPage() {
  return <StaticKeywordPage slug="2026-aurera-global-wiki" />;
}
