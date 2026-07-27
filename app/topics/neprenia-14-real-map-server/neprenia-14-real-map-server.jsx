import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-14-real-map-server');
}

export default function Neprenia14RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-14-real-map-server" />;
}
