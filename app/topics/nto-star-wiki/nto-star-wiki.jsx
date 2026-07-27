import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-wiki');
}

export default function NtoStarWikiKeywordPage() {
  return <StaticKeywordPage slug="nto-star-wiki" />;
}
