import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-classick-drakoria-wiki');
}

export default function CurrentClassickDrakoriaWikiKeywordPage() {
  return <StaticKeywordPage slug="current-classick-drakoria-wiki" />;
}
