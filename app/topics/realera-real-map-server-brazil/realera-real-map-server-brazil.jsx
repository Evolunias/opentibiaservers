import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-real-map-server-brazil');
}

export default function RealeraRealMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="realera-real-map-server-brazil" />;
}
