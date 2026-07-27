import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-medivia-wiki');
}

export default function PopularMediviaWikiKeywordPage() {
  return <StaticKeywordPage slug="popular-medivia-wiki" />;
}
