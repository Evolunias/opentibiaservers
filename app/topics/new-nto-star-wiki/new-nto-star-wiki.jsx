import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-nto-star-wiki');
}

export default function NewNtoStarWikiKeywordPage() {
  return <StaticKeywordPage slug="new-nto-star-wiki" />;
}
