import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-evolera-ot-server');
}

export default function NoResetEvoleraOtServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-evolera-ot-server" />;
}
