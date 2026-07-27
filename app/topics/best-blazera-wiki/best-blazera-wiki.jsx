import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-blazera-wiki');
}

export default function BestBlazeraWikiKeywordPage() {
  return <StaticKeywordPage slug="best-blazera-wiki" />;
}
