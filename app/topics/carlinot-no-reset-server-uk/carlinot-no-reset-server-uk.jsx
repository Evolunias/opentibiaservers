import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-no-reset-server-uk');
}

export default function CarlinotNoResetServerUkKeywordPage() {
  return <StaticKeywordPage slug="carlinot-no-reset-server-uk" />;
}
