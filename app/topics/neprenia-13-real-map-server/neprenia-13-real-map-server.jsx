import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-13-real-map-server');
}

export default function Neprenia13RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-13-real-map-server" />;
}
