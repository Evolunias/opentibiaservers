import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibianus-wiki');
}

export default function RealMapTibianusWikiKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibianus-wiki" />;
}
