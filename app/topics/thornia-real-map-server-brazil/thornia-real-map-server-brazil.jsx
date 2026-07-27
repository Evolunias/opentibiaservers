import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-real-map-server-brazil');
}

export default function ThorniaRealMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="thornia-real-map-server-brazil" />;
}
