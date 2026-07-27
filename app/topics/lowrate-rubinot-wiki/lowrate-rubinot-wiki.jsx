import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-rubinot-wiki');
}

export default function LowrateRubinotWikiKeywordPage() {
  return <StaticKeywordPage slug="lowrate-rubinot-wiki" />;
}
