import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-evolera-register');
}

export default function NoResetEvoleraRegisterKeywordPage() {
  return <StaticKeywordPage slug="no-reset-evolera-register" />;
}
