import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiame-wiki');
}

export default function HighrateTibiameWikiKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiame-wiki" />;
}
