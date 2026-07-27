import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-thornia-wiki');
}

export default function RealMapThorniaWikiKeywordPage() {
  return <StaticKeywordPage slug="real-map-thornia-wiki" />;
}
