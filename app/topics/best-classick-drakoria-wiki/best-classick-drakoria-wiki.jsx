import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-classick-drakoria-wiki');
}

export default function BestClassickDrakoriaWikiKeywordPage() {
  return <StaticKeywordPage slug="best-classick-drakoria-wiki" />;
}
