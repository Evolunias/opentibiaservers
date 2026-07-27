import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-real-map');
}

export default function ThorniaRealMapKeywordPage() {
  return <StaticKeywordPage slug="thornia-real-map" />;
}
