import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiame-wiki');
}

export default function FreshStartTibiameWikiKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiame-wiki" />;
}
