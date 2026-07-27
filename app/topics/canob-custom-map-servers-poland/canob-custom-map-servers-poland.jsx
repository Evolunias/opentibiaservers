import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-custom-map-servers-poland');
}

export default function CanobCustomMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="canob-custom-map-servers-poland" />;
}
