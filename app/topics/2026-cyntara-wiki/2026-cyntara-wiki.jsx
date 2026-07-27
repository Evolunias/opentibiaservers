import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-cyntara-wiki');
}

export default function Keyword2026CyntaraWikiKeywordPage() {
  return <StaticKeywordPage slug="2026-cyntara-wiki" />;
}
