import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-7-6-no-reset-server');
}

export default function CalmeraOt76NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-7-6-no-reset-server" />;
}
