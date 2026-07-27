import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-real-map-server-north-america');
}

export default function BlazeraRealMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="blazera-real-map-server-north-america" />;
}
