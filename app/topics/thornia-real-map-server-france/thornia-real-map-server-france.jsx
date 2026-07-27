import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-real-map-server-france');
}

export default function ThorniaRealMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="thornia-real-map-server-france" />;
}
