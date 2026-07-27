import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-7-1-no-reset-server');
}

export default function HarmoniaOt71NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-7-1-no-reset-server" />;
}
