import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-custom-map-servers-usa');
}

export default function CanobCustomMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="canob-custom-map-servers-usa" />;
}
