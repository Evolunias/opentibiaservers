import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-8-54-no-reset-server');
}

export default function HarmoniaOt854NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-8-54-no-reset-server" />;
}
