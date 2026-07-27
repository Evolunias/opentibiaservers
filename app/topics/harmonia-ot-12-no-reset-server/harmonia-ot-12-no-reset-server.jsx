import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-12-no-reset-server');
}

export default function HarmoniaOt12NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-12-no-reset-server" />;
}
