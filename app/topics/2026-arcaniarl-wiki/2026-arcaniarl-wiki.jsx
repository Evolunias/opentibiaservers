import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-arcaniarl-wiki');
}

export default function Keyword2026ArcaniarlWikiKeywordPage() {
  return <StaticKeywordPage slug="2026-arcaniarl-wiki" />;
}
