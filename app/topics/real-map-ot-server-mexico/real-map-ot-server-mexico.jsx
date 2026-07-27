import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-ot-server-mexico');
}

export default function RealMapOtServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="real-map-ot-server-mexico" />;
}
