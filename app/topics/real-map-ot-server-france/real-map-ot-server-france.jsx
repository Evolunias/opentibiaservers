import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-ot-server-france');
}

export default function RealMapOtServerFranceKeywordPage() {
  return <StaticKeywordPage slug="real-map-ot-server-france" />;
}
