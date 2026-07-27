import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-calmera-ot-servers');
}

export default function RealMapCalmeraOtServersKeywordPage() {
  return <StaticKeywordPage slug="real-map-calmera-ot-servers" />;
}
