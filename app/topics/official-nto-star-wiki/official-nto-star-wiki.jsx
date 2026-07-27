import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-nto-star-wiki');
}

export default function OfficialNtoStarWikiKeywordPage() {
  return <StaticKeywordPage slug="official-nto-star-wiki" />;
}
