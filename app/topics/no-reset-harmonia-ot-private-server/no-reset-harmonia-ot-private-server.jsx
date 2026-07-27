import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-harmonia-ot-private-server');
}

export default function NoResetHarmoniaOtPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-harmonia-ot-private-server" />;
}
