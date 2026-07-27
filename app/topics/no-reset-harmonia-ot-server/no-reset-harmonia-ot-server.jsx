import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-harmonia-ot-server');
}

export default function NoResetHarmoniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-harmonia-ot-server" />;
}
