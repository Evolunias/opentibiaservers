import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-no-reset-server-poland');
}

export default function HarmoniaOtNoResetServerPolandKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-no-reset-server-poland" />;
}
