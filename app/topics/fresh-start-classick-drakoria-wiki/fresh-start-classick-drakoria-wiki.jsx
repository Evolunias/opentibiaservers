import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-classick-drakoria-wiki');
}

export default function FreshStartClassickDrakoriaWikiKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-classick-drakoria-wiki" />;
}
