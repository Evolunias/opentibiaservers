import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiame-wiki');
}

export default function LowrateTibiameWikiKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiame-wiki" />;
}
