import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-kasteria-ot-server');
}

export default function RealMapKasteriaOtServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-kasteria-ot-server" />;
}
