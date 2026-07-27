import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-thaisot-wiki');
}

export default function BestThaisotWikiKeywordPage() {
  return <StaticKeywordPage slug="best-thaisot-wiki" />;
}
