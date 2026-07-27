import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiame-wiki');
}

export default function NewTibiameWikiKeywordPage() {
  return <StaticKeywordPage slug="new-tibiame-wiki" />;
}
