import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-11-custom-map-server');
}

export default function Neprenia11CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-11-custom-map-server" />;
}
