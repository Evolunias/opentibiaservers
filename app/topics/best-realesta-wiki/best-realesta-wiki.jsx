import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-realesta-wiki');
}

export default function BestRealestaWikiKeywordPage() {
  return <StaticKeywordPage slug="best-realesta-wiki" />;
}
