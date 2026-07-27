import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-real-map-servers-canada');
}

export default function BlazeraRealMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="blazera-real-map-servers-canada" />;
}
