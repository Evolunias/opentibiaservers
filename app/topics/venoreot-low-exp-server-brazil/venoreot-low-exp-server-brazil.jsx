import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-low-exp-server-brazil');
}

export default function VenoreotLowExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="venoreot-low-exp-server-brazil" />;
}
