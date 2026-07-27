import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-8-0-no-reset-server');
}

export default function HarmoniaOt80NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-8-0-no-reset-server" />;
}
