import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-no-reset-server-latin-america');
}

export default function HarmoniaOtNoResetServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-no-reset-server-latin-america" />;
}
