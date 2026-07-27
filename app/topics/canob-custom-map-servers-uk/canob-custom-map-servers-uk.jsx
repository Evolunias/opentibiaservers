import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-custom-map-servers-uk');
}

export default function CanobCustomMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="canob-custom-map-servers-uk" />;
}
