import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-no-reset-server-france');
}

export default function HarmoniaOtNoResetServerFranceKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-no-reset-server-france" />;
}
