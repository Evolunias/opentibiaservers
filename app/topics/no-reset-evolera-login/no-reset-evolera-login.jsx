import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-evolera-login');
}

export default function NoResetEvoleraLoginKeywordPage() {
  return <StaticKeywordPage slug="no-reset-evolera-login" />;
}
