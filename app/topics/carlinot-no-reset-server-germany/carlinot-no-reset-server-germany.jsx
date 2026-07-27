import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-no-reset-server-germany');
}

export default function CarlinotNoResetServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="carlinot-no-reset-server-germany" />;
}
