import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-no-reset-server-canada');
}

export default function CarlinotNoResetServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-no-reset-server-canada" />;
}
