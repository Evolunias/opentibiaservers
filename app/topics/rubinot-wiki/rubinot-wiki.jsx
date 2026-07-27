import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-wiki');
}

export default function RubinotWikiKeywordPage() {
  return <StaticKeywordPage slug="rubinot-wiki" />;
}
