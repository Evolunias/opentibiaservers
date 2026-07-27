import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-yurots-wiki');
}

export default function BestYurotsWikiKeywordPage() {
  return <StaticKeywordPage slug="best-yurots-wiki" />;
}
