import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-real-map-server-canada');
}

export default function BlazeraRealMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="blazera-real-map-server-canada" />;
}
