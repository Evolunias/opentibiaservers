import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-7-4-custom-map-server');
}

export default function Neprenia74CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-7-4-custom-map-server" />;
}
