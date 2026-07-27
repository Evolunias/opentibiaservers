import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-11-real-map-server');
}

export default function Neprenia11RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-11-real-map-server" />;
}
