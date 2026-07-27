import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-custom-map-servers-canada');
}

export default function BlazeraCustomMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="blazera-custom-map-servers-canada" />;
}
