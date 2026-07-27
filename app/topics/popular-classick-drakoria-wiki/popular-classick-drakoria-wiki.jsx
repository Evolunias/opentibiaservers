import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-classick-drakoria-wiki');
}

export default function PopularClassickDrakoriaWikiKeywordPage() {
  return <StaticKeywordPage slug="popular-classick-drakoria-wiki" />;
}
