import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-client-south-america');
}

export default function RealMapClientSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="real-map-client-south-america" />;
}
