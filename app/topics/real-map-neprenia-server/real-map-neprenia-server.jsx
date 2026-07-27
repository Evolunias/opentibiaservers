import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-neprenia-server');
}

export default function RealMapNepreniaServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-neprenia-server" />;
}
