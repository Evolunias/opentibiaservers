import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-custom-map-server-canada');
}

export default function BlazeraCustomMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="blazera-custom-map-server-canada" />;
}
