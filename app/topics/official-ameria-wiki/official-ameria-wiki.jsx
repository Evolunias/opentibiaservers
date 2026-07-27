import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-ameria-wiki');
}

export default function OfficialAmeriaWikiKeywordPage() {
  return <StaticKeywordPage slug="official-ameria-wiki" />;
}
