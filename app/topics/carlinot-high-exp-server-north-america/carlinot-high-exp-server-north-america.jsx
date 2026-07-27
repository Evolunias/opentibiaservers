import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-high-exp-server-north-america');
}

export default function CarlinotHighExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-high-exp-server-north-america" />;
}
