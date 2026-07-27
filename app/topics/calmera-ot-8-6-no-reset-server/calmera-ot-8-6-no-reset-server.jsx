import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-8-6-no-reset-server');
}

export default function CalmeraOt86NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-8-6-no-reset-server" />;
}
