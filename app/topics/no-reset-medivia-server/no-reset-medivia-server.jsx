import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-medivia-server');
}

export default function NoResetMediviaServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-medivia-server" />;
}
