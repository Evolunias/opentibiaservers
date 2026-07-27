import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-nto-star-wiki');
}

export default function CustomNtoStarWikiKeywordPage() {
  return <StaticKeywordPage slug="custom-nto-star-wiki" />;
}
