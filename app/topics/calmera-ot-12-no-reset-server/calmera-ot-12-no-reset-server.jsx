import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-12-no-reset-server');
}

export default function CalmeraOt12NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-12-no-reset-server" />;
}
