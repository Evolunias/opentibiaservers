import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiame-wiki');
}

export default function ActiveTibiameWikiKeywordPage() {
  return <StaticKeywordPage slug="active-tibiame-wiki" />;
}
