import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-ameria-wiki');
}

export default function ActiveAmeriaWikiKeywordPage() {
  return <StaticKeywordPage slug="active-ameria-wiki" />;
}
