import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-real-map-server-argentina');
}

export default function ThorniaRealMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="thornia-real-map-server-argentina" />;
}
