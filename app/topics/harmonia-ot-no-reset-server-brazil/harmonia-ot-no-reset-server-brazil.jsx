import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-no-reset-server-brazil');
}

export default function HarmoniaOtNoResetServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-no-reset-server-brazil" />;
}
