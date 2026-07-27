import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-yurots-wiki');
}

export default function PopularYurotsWikiKeywordPage() {
  return <StaticKeywordPage slug="popular-yurots-wiki" />;
}
