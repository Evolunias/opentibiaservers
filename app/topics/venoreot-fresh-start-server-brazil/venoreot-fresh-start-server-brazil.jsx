import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-fresh-start-server-brazil');
}

export default function VenoreotFreshStartServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="venoreot-fresh-start-server-brazil" />;
}
