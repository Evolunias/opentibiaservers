import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-no-reset-server-brazil');
}

export default function VenoreotNoResetServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="venoreot-no-reset-server-brazil" />;
}
