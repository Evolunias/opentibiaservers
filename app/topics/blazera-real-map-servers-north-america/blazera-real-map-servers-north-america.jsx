import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-real-map-servers-north-america');
}

export default function BlazeraRealMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="blazera-real-map-servers-north-america" />;
}
