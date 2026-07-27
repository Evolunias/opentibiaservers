import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-real-map-server-germany');
}

export default function ThorniaRealMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="thornia-real-map-server-germany" />;
}
