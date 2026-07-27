import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-eldera-servers');
}

export default function RealMapElderaServersKeywordPage() {
  return <StaticKeywordPage slug="real-map-eldera-servers" />;
}
