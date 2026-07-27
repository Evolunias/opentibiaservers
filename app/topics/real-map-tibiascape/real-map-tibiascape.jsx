import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiascape');
}

export default function RealMapTibiascapeKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiascape" />;
}
