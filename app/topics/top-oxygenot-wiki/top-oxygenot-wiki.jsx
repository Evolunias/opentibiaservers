import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-oxygenot-wiki');
}

export default function TopOxygenotWikiKeywordPage() {
  return <StaticKeywordPage slug="top-oxygenot-wiki" />;
}
