import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-custom-map-servers-brazil');
}

export default function CanobCustomMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="canob-custom-map-servers-brazil" />;
}
