import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-custom-map-servers-south-america');
}

export default function BlazeraCustomMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="blazera-custom-map-servers-south-america" />;
}
