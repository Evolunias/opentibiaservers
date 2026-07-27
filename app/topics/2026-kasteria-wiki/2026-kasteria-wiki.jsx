import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-kasteria-wiki');
}

export default function Keyword2026KasteriaWikiKeywordPage() {
  return <StaticKeywordPage slug="2026-kasteria-wiki" />;
}
