import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-custom-map-servers-south-america');
}

export default function NepreniaCustomMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-custom-map-servers-south-america" />;
}
