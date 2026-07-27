import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-no-reset-server-sweden');
}

export default function CarlinotNoResetServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="carlinot-no-reset-server-sweden" />;
}
