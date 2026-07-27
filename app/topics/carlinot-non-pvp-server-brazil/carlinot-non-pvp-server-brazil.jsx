import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-non-pvp-server-brazil');
}

export default function CarlinotNonPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="carlinot-non-pvp-server-brazil" />;
}
