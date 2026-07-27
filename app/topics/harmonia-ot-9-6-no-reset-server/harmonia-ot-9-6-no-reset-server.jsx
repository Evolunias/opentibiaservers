import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-9-6-no-reset-server');
}

export default function HarmoniaOt96NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-9-6-no-reset-server" />;
}
