import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-client-argentina');
}

export default function RealMapClientArgentinaKeywordPage() {
  return <StaticKeywordPage slug="real-map-client-argentina" />;
}
