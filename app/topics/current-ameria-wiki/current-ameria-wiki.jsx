import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-ameria-wiki');
}

export default function CurrentAmeriaWikiKeywordPage() {
  return <StaticKeywordPage slug="current-ameria-wiki" />;
}
