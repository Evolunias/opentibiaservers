import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-realesta-ot-server');
}

export default function NoResetRealestaOtServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-realesta-ot-server" />;
}
