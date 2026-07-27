import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-wiki');
}

export default function ClassickDrakoriaWikiKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-wiki" />;
}
