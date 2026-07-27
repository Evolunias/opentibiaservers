import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-classick-drakoria-wiki');
}

export default function LowrateClassickDrakoriaWikiKeywordPage() {
  return <StaticKeywordPage slug="lowrate-classick-drakoria-wiki" />;
}
