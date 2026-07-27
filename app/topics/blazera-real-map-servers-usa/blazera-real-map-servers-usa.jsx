import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-real-map-servers-usa');
}

export default function BlazeraRealMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="blazera-real-map-servers-usa" />;
}
