import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-unline-ot-server');
}

export default function NoResetUnlineOtServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-unline-ot-server" />;
}
