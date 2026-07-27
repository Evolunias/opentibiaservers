import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiaorigins-wiki');
}

export default function RealMapTibiaoriginsWikiKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiaorigins-wiki" />;
}
