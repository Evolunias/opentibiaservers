import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-oxygenot-wiki');
}

export default function FreshStartOxygenotWikiKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-oxygenot-wiki" />;
}
