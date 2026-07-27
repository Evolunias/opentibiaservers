import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-ot-server-south-america');
}

export default function RealMapOtServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="real-map-ot-server-south-america" />;
}
