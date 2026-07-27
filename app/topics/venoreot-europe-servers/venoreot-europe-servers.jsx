import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-europe-servers');
}

export default function VenoreotEuropeServersKeywordPage() {
  return <StaticKeywordPage slug="venoreot-europe-servers" />;
}
