import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-custom-map-server-south-america');
}

export default function NepreniaCustomMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-custom-map-server-south-america" />;
}
