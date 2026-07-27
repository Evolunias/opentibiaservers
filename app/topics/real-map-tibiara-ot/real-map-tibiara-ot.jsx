import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiara-ot');
}

export default function RealMapTibiaraOtKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiara-ot" />;
}
