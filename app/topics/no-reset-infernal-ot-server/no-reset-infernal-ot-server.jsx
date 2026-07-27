import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-infernal-ot-server');
}

export default function NoResetInfernalOtServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-infernal-ot-server" />;
}
