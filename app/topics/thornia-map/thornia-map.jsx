import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-map');
}

export default function ThorniaMapKeywordPage() {
  return <StaticKeywordPage slug="thornia-map" />;
}
