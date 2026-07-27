import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-evolera-wiki');
}

export default function Keyword2026EvoleraWikiKeywordPage() {
  return <StaticKeywordPage slug="2026-evolera-wiki" />;
}
