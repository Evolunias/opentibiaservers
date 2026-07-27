import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiame-wiki');
}

export default function TopTibiameWikiKeywordPage() {
  return <StaticKeywordPage slug="top-tibiame-wiki" />;
}
