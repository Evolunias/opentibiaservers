import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-rubinot-wiki');
}

export default function BestRubinotWikiKeywordPage() {
  return <StaticKeywordPage slug="best-rubinot-wiki" />;
}
