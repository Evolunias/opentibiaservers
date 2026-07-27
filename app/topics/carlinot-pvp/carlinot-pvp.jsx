import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-pvp');
}

export default function CarlinotPvpKeywordPage() {
  return <StaticKeywordPage slug="carlinot-pvp" />;
}
