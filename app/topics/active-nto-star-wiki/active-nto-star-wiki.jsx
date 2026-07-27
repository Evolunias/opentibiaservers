import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-nto-star-wiki');
}

export default function ActiveNtoStarWikiKeywordPage() {
  return <StaticKeywordPage slug="active-nto-star-wiki" />;
}
