import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-real-map-server-south-america');
}

export default function ThaisotRealMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-real-map-server-south-america" />;
}
