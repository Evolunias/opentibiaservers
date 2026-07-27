import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-custom-map-server-usa');
}

export default function CanobCustomMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="canob-custom-map-server-usa" />;
}
