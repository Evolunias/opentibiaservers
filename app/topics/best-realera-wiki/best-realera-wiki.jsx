import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-realera-wiki');
}

export default function BestRealeraWikiKeywordPage() {
  return <StaticKeywordPage slug="best-realera-wiki" />;
}
