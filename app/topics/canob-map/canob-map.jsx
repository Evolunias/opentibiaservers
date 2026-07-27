import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-map');
}

export default function CanobMapKeywordPage() {
  return <StaticKeywordPage slug="canob-map" />;
}
