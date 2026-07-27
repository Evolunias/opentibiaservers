import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-no-reset-server-france');
}

export default function CalmeraOtNoResetServerFranceKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-no-reset-server-france" />;
}
