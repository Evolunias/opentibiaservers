import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-kasteria-wiki');
}

export default function ActiveKasteriaWikiKeywordPage() {
  return <StaticKeywordPage slug="active-kasteria-wiki" />;
}
