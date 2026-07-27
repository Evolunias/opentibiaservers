import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-kasteria-wiki');
}

export default function OfficialKasteriaWikiKeywordPage() {
  return <StaticKeywordPage slug="official-kasteria-wiki" />;
}
