import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-custom-map-server-south-america');
}

export default function MediviaCustomMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="medivia-custom-map-server-south-america" />;
}
