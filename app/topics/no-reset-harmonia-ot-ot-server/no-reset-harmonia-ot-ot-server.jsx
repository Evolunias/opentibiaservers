import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-harmonia-ot-ot-server');
}

export default function NoResetHarmoniaOtOtServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-harmonia-ot-ot-server" />;
}
