import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-rubinot-wiki');
}

export default function NewRubinotWikiKeywordPage() {
  return <StaticKeywordPage slug="new-rubinot-wiki" />;
}
