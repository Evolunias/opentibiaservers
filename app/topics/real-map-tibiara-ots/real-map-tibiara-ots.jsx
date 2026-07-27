import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiara-ots');
}

export default function RealMapTibiaraOtsKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiara-ots" />;
}
