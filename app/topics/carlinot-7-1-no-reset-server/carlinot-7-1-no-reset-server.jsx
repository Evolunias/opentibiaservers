import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-7-1-no-reset-server');
}

export default function Carlinot71NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-7-1-no-reset-server" />;
}
