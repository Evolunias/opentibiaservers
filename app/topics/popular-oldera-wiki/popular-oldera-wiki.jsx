import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-oldera-wiki');
}

export default function PopularOlderaWikiKeywordPage() {
  return <StaticKeywordPage slug="popular-oldera-wiki" />;
}
