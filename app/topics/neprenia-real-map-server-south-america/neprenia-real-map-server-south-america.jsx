import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-real-map-server-south-america');
}

export default function NepreniaRealMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-real-map-server-south-america" />;
}
