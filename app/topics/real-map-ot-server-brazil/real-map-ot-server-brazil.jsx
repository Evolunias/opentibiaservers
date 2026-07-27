import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-ot-server-brazil');
}

export default function RealMapOtServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="real-map-ot-server-brazil" />;
}
