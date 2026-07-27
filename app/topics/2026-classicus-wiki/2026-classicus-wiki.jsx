import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-classicus-wiki');
}

export default function Keyword2026ClassicusWikiKeywordPage() {
  return <StaticKeywordPage slug="2026-classicus-wiki" />;
}
