import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-evolera-register');
}

export default function CurrentEvoleraRegisterKeywordPage() {
  return <StaticKeywordPage slug="current-evolera-register" />;
}
