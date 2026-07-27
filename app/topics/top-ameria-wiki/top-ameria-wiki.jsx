import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-ameria-wiki');
}

export default function TopAmeriaWikiKeywordPage() {
  return <StaticKeywordPage slug="top-ameria-wiki" />;
}
