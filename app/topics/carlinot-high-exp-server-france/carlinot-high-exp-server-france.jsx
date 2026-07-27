import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-high-exp-server-france');
}

export default function CarlinotHighExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="carlinot-high-exp-server-france" />;
}
