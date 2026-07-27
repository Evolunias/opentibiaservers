import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-neprenia-wiki');
}

export default function OfficialNepreniaWikiKeywordPage() {
  return <StaticKeywordPage slug="official-neprenia-wiki" />;
}
