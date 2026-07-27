import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-realera-wiki');
}

export default function PopularRealeraWikiKeywordPage() {
  return <StaticKeywordPage slug="popular-realera-wiki" />;
}
