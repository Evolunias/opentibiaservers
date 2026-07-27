import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-server-brazil');
}

export default function RealMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="real-map-server-brazil" />;
}
