import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-kasteria-wiki');
}

export default function CustomKasteriaWikiKeywordPage() {
  return <StaticKeywordPage slug="custom-kasteria-wiki" />;
}
