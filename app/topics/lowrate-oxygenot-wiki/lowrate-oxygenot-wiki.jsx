import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-oxygenot-wiki');
}

export default function LowrateOxygenotWikiKeywordPage() {
  return <StaticKeywordPage slug="lowrate-oxygenot-wiki" />;
}
