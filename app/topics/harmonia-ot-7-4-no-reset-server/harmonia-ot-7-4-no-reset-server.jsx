import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-7-4-no-reset-server');
}

export default function HarmoniaOt74NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-7-4-no-reset-server" />;
}
