import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-real-map-server-europe');
}

export default function ThorniaRealMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="thornia-real-map-server-europe" />;
}
