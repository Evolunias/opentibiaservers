import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-7-72-real-map-server');
}

export default function Neprenia772RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-7-72-real-map-server" />;
}
