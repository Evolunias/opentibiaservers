import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiame-wiki');
}

export default function CustomTibiameWikiKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiame-wiki" />;
}
