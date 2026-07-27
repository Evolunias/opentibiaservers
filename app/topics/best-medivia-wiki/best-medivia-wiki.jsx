import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-medivia-wiki');
}

export default function BestMediviaWikiKeywordPage() {
  return <StaticKeywordPage slug="best-medivia-wiki" />;
}
