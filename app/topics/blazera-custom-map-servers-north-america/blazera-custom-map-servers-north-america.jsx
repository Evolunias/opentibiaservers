import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-custom-map-servers-north-america');
}

export default function BlazeraCustomMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="blazera-custom-map-servers-north-america" />;
}
