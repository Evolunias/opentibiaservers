import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-7-72-no-reset-server');
}

export default function HarmoniaOt772NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-7-72-no-reset-server" />;
}
