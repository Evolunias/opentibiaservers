import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-real-map-servers-south-america');
}

export default function BlazeraRealMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="blazera-real-map-servers-south-america" />;
}
