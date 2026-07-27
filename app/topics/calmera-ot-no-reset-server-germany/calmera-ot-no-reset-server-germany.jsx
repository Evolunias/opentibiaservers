import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-no-reset-server-germany');
}

export default function CalmeraOtNoResetServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-no-reset-server-germany" />;
}
