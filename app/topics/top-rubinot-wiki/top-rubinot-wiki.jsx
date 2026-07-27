import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-rubinot-wiki');
}

export default function TopRubinotWikiKeywordPage() {
  return <StaticKeywordPage slug="top-rubinot-wiki" />;
}
