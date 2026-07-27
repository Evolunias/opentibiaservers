import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-no-reset-server-north-america');
}

export default function CarlinotNoResetServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-no-reset-server-north-america" />;
}
