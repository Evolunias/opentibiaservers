import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-7-72-custom-map-server');
}

export default function Neprenia772CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-7-72-custom-map-server" />;
}
