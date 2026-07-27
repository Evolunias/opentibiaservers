import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-realesta-wiki');
}

export default function PopularRealestaWikiKeywordPage() {
  return <StaticKeywordPage slug="popular-realesta-wiki" />;
}
