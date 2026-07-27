import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-rubinot-wiki');
}

export default function FreshStartRubinotWikiKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-rubinot-wiki" />;
}
