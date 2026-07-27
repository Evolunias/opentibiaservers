import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-8-1-no-reset-server');
}

export default function HarmoniaOt81NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-8-1-no-reset-server" />;
}
