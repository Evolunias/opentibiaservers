import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiara');
}

export default function RealMapTibiaraKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiara" />;
}
