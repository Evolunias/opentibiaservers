import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-poland-server');
}

export default function VenoreotPolandServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-poland-server" />;
}
