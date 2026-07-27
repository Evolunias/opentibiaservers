import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-custom-map-server-canada');
}

export default function CanobCustomMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="canob-custom-map-server-canada" />;
}
