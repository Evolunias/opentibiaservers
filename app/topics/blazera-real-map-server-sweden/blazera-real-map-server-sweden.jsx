import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-real-map-server-sweden');
}

export default function BlazeraRealMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="blazera-real-map-server-sweden" />;
}
