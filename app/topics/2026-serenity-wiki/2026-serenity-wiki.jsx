import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-serenity-wiki');
}

export default function Keyword2026SerenityWikiKeywordPage() {
  return <StaticKeywordPage slug="2026-serenity-wiki" />;
}
