import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-sabrehaven-wiki');
}

export default function PopularSabrehavenWikiKeywordPage() {
  return <StaticKeywordPage slug="popular-sabrehaven-wiki" />;
}
