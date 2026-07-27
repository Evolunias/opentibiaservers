import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-8-4-real-map-server');
}

export default function Neprenia84RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-8-4-real-map-server" />;
}
