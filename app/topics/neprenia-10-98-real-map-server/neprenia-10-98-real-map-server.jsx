import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-10-98-real-map-server');
}

export default function Neprenia1098RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-10-98-real-map-server" />;
}
