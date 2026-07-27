import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-no-reset-server-canada');
}

export default function HarmoniaOtNoResetServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-no-reset-server-canada" />;
}
