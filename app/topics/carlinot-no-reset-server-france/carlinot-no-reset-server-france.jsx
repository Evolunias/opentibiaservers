import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-no-reset-server-france');
}

export default function CarlinotNoResetServerFranceKeywordPage() {
  return <StaticKeywordPage slug="carlinot-no-reset-server-france" />;
}
