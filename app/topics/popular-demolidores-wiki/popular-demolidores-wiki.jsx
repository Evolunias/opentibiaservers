import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-demolidores-wiki');
}

export default function PopularDemolidoresWikiKeywordPage() {
  return <StaticKeywordPage slug="popular-demolidores-wiki" />;
}
