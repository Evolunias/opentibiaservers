import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-custom-map-server-brazil');
}

export default function CanobCustomMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="canob-custom-map-server-brazil" />;
}
