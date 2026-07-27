import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-15-no-reset-server');
}

export default function HarmoniaOt15NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-15-no-reset-server" />;
}
