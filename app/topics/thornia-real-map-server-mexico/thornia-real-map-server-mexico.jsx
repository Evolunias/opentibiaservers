import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-real-map-server-mexico');
}

export default function ThorniaRealMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="thornia-real-map-server-mexico" />;
}
