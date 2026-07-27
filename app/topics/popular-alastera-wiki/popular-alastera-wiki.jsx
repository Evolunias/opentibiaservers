import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-alastera-wiki');
}

export default function PopularAlasteraWikiKeywordPage() {
  return <StaticKeywordPage slug="popular-alastera-wiki" />;
}
