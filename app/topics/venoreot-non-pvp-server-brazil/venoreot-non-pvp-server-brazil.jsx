import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-non-pvp-server-brazil');
}

export default function VenoreotNonPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="venoreot-non-pvp-server-brazil" />;
}
