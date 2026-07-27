import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-rubinot-wiki');
}

export default function CurrentRubinotWikiKeywordPage() {
  return <StaticKeywordPage slug="current-rubinot-wiki" />;
}
