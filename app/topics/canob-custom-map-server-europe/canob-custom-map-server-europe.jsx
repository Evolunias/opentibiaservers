import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-custom-map-server-europe');
}

export default function CanobCustomMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="canob-custom-map-server-europe" />;
}
