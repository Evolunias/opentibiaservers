import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-canob-wiki');
}

export default function Keyword2026CanobWikiKeywordPage() {
  return <StaticKeywordPage slug="2026-canob-wiki" />;
}
