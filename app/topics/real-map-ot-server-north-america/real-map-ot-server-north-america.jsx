import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-ot-server-north-america');
}

export default function RealMapOtServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="real-map-ot-server-north-america" />;
}
