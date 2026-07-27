import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-wiki');
}

export default function KasteriaWikiKeywordPage() {
  return <StaticKeywordPage slug="kasteria-wiki" />;
}
