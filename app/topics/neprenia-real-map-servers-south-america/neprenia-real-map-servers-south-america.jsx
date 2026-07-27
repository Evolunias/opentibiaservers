import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-real-map-servers-south-america');
}

export default function NepreniaRealMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-real-map-servers-south-america" />;
}
