import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-rubinot-wiki');
}

export default function PopularRubinotWikiKeywordPage() {
  return <StaticKeywordPage slug="popular-rubinot-wiki" />;
}
