import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-rubinot-wiki');
}

export default function CustomRubinotWikiKeywordPage() {
  return <StaticKeywordPage slug="custom-rubinot-wiki" />;
}
