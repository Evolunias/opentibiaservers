import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-custom-map-servers-europe');
}

export default function CanobCustomMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="canob-custom-map-servers-europe" />;
}
