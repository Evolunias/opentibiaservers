import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-12-real-map-server');
}

export default function Neprenia12RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-12-real-map-server" />;
}
