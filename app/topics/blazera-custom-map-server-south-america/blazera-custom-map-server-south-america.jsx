import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-custom-map-server-south-america');
}

export default function BlazeraCustomMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="blazera-custom-map-server-south-america" />;
}
