import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-oxygenot-server');
}

export default function NoResetOxygenotServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-oxygenot-server" />;
}
