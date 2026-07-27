import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-14-no-reset-server');
}

export default function CalmeraOt14NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-14-no-reset-server" />;
}
