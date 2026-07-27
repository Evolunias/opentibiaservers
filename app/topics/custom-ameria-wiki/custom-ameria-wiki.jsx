import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-ameria-wiki');
}

export default function CustomAmeriaWikiKeywordPage() {
  return <StaticKeywordPage slug="custom-ameria-wiki" />;
}
