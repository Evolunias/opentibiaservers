import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-classicus-wiki');
}

export default function PopularClassicusWikiKeywordPage() {
  return <StaticKeywordPage slug="popular-classicus-wiki" />;
}
