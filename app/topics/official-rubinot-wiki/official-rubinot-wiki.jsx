import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-rubinot-wiki');
}

export default function OfficialRubinotWikiKeywordPage() {
  return <StaticKeywordPage slug="official-rubinot-wiki" />;
}
