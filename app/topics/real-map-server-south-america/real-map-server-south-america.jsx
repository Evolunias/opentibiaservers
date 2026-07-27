import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-server-south-america');
}

export default function RealMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="real-map-server-south-america" />;
}
