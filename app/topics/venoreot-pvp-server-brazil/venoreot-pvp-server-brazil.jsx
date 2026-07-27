import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-pvp-server-brazil');
}

export default function VenoreotPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="venoreot-pvp-server-brazil" />;
}
