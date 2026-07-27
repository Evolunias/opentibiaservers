import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-no-reset-server-argentina');
}

export default function CarlinotNoResetServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-no-reset-server-argentina" />;
}
