import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-9-6-real-map-server');
}

export default function Neprenia96RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-9-6-real-map-server" />;
}
