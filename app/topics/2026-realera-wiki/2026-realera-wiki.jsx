import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-realera-wiki');
}

export default function Keyword2026RealeraWikiKeywordPage() {
  return <StaticKeywordPage slug="2026-realera-wiki" />;
}
