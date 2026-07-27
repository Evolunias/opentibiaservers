import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiame-wiki');
}

export default function OfficialTibiameWikiKeywordPage() {
  return <StaticKeywordPage slug="official-tibiame-wiki" />;
}
