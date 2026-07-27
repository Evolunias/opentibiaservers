import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-kasteria-wiki');
}

export default function RealMapKasteriaWikiKeywordPage() {
  return <StaticKeywordPage slug="real-map-kasteria-wiki" />;
}
