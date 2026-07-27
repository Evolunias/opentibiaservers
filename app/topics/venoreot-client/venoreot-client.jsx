import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-client');
}

export default function VenoreotClientKeywordPage() {
  return <StaticKeywordPage slug="venoreot-client" />;
}
