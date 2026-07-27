import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-ameria-wiki');
}

export default function NewAmeriaWikiKeywordPage() {
  return <StaticKeywordPage slug="new-ameria-wiki" />;
}
