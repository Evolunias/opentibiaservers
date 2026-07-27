import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-custom-map-servers-south-america');
}

export default function CanobCustomMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="canob-custom-map-servers-south-america" />;
}
