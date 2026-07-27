import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-server-list-argentina');
}

export default function RealMapServerListArgentinaKeywordPage() {
  return <StaticKeywordPage slug="real-map-server-list-argentina" />;
}
