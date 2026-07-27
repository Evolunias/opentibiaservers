import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-rubinot-wiki');
}

export default function NewSeasonRubinotWikiKeywordPage() {
  return <StaticKeywordPage slug="new-season-rubinot-wiki" />;
}
