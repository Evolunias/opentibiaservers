import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-neprenia-client');
}

export default function RealMapNepreniaClientKeywordPage() {
  return <StaticKeywordPage slug="real-map-neprenia-client" />;
}
