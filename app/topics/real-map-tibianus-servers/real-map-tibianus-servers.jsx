import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibianus-servers');
}

export default function RealMapTibianusServersKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibianus-servers" />;
}
