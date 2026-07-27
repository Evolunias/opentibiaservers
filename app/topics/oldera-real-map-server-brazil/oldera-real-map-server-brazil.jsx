import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-real-map-server-brazil');
}

export default function OlderaRealMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="oldera-real-map-server-brazil" />;
}
