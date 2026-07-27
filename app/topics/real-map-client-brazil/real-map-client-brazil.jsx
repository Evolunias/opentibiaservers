import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-client-brazil');
}

export default function RealMapClientBrazilKeywordPage() {
  return <StaticKeywordPage slug="real-map-client-brazil" />;
}
