import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-no-reset-server-mexico');
}

export default function CarlinotNoResetServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="carlinot-no-reset-server-mexico" />;
}
