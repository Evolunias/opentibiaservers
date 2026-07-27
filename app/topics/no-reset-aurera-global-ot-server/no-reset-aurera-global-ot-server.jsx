import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-aurera-global-ot-server');
}

export default function NoResetAureraGlobalOtServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-aurera-global-ot-server" />;
}
