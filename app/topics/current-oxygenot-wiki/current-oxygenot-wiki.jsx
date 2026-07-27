import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-oxygenot-wiki');
}

export default function CurrentOxygenotWikiKeywordPage() {
  return <StaticKeywordPage slug="current-oxygenot-wiki" />;
}
