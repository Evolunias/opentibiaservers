import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiame-wiki');
}

export default function CurrentTibiameWikiKeywordPage() {
  return <StaticKeywordPage slug="current-tibiame-wiki" />;
}
