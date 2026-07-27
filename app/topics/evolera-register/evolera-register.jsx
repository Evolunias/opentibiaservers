import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-register');
}

export default function EvoleraRegisterKeywordPage() {
  return <StaticKeywordPage slug="evolera-register" />;
}
