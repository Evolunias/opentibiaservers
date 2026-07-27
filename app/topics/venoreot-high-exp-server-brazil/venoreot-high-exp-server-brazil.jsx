import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-high-exp-server-brazil');
}

export default function VenoreotHighExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="venoreot-high-exp-server-brazil" />;
}
