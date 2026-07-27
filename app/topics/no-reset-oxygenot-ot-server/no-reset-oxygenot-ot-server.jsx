import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-oxygenot-ot-server');
}

export default function NoResetOxygenotOtServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-oxygenot-ot-server" />;
}
