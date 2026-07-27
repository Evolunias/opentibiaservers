import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-classick-drakoria-wiki');
}

export default function NewClassickDrakoriaWikiKeywordPage() {
  return <StaticKeywordPage slug="new-classick-drakoria-wiki" />;
}
