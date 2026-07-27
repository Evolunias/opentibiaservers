import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-nto-star-wiki');
}

export default function Keyword2026NtoStarWikiKeywordPage() {
  return <StaticKeywordPage slug="2026-nto-star-wiki" />;
}
