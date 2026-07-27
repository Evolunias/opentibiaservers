import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-custom-map-server-north-america');
}

export default function BlazeraCustomMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="blazera-custom-map-server-north-america" />;
}
