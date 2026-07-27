import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-custom-map-server-uk');
}

export default function CanobCustomMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="canob-custom-map-server-uk" />;
}
