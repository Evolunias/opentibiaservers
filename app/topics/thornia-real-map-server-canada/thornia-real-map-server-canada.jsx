import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-real-map-server-canada');
}

export default function ThorniaRealMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="thornia-real-map-server-canada" />;
}
