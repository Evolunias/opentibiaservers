import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-11-no-reset-server');
}

export default function HarmoniaOt11NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-11-no-reset-server" />;
}
