import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-real-map-server-south-america');
}

export default function BlazeraRealMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="blazera-real-map-server-south-america" />;
}
