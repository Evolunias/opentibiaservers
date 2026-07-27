import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-real-map-server-poland');
}

export default function ThorniaRealMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="thornia-real-map-server-poland" />;
}
