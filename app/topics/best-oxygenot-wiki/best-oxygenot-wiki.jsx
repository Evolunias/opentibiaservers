import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-oxygenot-wiki');
}

export default function BestOxygenotWikiKeywordPage() {
  return <StaticKeywordPage slug="best-oxygenot-wiki" />;
}
