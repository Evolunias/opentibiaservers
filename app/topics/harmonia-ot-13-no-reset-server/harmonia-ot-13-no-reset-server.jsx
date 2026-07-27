import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-13-no-reset-server');
}

export default function HarmoniaOt13NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-13-no-reset-server" />;
}
