import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-no-reset-server-uk');
}

export default function HarmoniaOtNoResetServerUkKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-no-reset-server-uk" />;
}
