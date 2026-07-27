import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-real-map-server-south-america');
}

export default function TibiantisRealMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-real-map-server-south-america" />;
}
