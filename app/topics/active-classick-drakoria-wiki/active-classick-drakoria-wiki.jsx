import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-classick-drakoria-wiki');
}

export default function ActiveClassickDrakoriaWikiKeywordPage() {
  return <StaticKeywordPage slug="active-classick-drakoria-wiki" />;
}
