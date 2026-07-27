import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-rubinot-wiki');
}

export default function ActiveRubinotWikiKeywordPage() {
  return <StaticKeywordPage slug="active-rubinot-wiki" />;
}
