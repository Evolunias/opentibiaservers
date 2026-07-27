import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-14-no-reset-server');
}

export default function HarmoniaOt14NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-14-no-reset-server" />;
}
