import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-real-map-server-south-america');
}

export default function TibijkaRealMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-real-map-server-south-america" />;
}
