import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-classick-drakoria-wiki');
}

export default function TopClassickDrakoriaWikiKeywordPage() {
  return <StaticKeywordPage slug="top-classick-drakoria-wiki" />;
}
