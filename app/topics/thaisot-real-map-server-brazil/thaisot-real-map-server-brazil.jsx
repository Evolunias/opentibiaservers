import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-real-map-server-brazil');
}

export default function ThaisotRealMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="thaisot-real-map-server-brazil" />;
}
