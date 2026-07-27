import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibianus-ot-server');
}

export default function RealMapTibianusOtServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibianus-ot-server" />;
}
