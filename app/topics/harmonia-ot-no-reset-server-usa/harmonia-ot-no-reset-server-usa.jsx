import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-no-reset-server-usa');
}

export default function HarmoniaOtNoResetServerUsaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-no-reset-server-usa" />;
}
