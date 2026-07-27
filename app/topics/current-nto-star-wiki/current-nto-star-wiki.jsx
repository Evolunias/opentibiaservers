import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-nto-star-wiki');
}

export default function CurrentNtoStarWikiKeywordPage() {
  return <StaticKeywordPage slug="current-nto-star-wiki" />;
}
