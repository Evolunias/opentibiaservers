import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-neprenia-servers');
}

export default function RealMapNepreniaServersKeywordPage() {
  return <StaticKeywordPage slug="real-map-neprenia-servers" />;
}
