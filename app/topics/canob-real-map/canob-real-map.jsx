import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-real-map');
}

export default function CanobRealMapKeywordPage() {
  return <StaticKeywordPage slug="canob-real-map" />;
}
