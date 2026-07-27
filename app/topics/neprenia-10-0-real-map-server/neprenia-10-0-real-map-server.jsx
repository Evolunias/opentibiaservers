import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-10-0-real-map-server');
}

export default function Neprenia100RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-10-0-real-map-server" />;
}
