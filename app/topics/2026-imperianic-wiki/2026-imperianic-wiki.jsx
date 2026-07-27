import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-imperianic-wiki');
}

export default function Keyword2026ImperianicWikiKeywordPage() {
  return <StaticKeywordPage slug="2026-imperianic-wiki" />;
}
