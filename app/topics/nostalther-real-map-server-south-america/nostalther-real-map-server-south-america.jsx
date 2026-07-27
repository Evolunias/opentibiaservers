import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-real-map-server-south-america');
}

export default function NostaltherRealMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-real-map-server-south-america" />;
}
