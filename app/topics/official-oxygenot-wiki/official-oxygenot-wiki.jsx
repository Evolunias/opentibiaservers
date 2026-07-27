import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-oxygenot-wiki');
}

export default function OfficialOxygenotWikiKeywordPage() {
  return <StaticKeywordPage slug="official-oxygenot-wiki" />;
}
