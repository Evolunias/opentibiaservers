import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-real-map-server-argentina');
}

export default function ThaisotRealMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-real-map-server-argentina" />;
}
