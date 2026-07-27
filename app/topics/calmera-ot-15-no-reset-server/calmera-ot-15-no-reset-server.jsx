import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-15-no-reset-server');
}

export default function CalmeraOt15NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-15-no-reset-server" />;
}
