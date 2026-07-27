import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-wars');
}

export default function VenoreotWarsKeywordPage() {
  return <StaticKeywordPage slug="venoreot-wars" />;
}
