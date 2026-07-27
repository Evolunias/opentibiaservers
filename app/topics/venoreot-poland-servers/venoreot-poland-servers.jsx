import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-poland-servers');
}

export default function VenoreotPolandServersKeywordPage() {
  return <StaticKeywordPage slug="venoreot-poland-servers" />;
}
