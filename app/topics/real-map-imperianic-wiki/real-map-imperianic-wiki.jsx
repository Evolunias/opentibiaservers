import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-imperianic-wiki');
}

export default function RealMapImperianicWikiKeywordPage() {
  return <StaticKeywordPage slug="real-map-imperianic-wiki" />;
}
