import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-server-argentina');
}

export default function RealMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="real-map-server-argentina" />;
}
