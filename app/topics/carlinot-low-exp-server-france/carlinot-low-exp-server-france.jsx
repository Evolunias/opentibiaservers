import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-low-exp-server-france');
}

export default function CarlinotLowExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="carlinot-low-exp-server-france" />;
}
