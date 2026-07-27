import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-no-reset-server-latin-america');
}

export default function CarlinotNoResetServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-no-reset-server-latin-america" />;
}
