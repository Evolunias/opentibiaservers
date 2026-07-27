import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-oxygenot-wiki');
}

export default function PopularOxygenotWikiKeywordPage() {
  return <StaticKeywordPage slug="popular-oxygenot-wiki" />;
}
