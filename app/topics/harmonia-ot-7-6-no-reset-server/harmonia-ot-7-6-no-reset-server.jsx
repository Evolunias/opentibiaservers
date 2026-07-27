import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-7-6-no-reset-server');
}

export default function HarmoniaOt76NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-7-6-no-reset-server" />;
}
