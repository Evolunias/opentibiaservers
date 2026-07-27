import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-tibiara-wiki');
}

export default function Keyword2026TibiaraWikiKeywordPage() {
  return <StaticKeywordPage slug="2026-tibiara-wiki" />;
}
