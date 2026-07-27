import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-evolera-register');
}

export default function BestEvoleraRegisterKeywordPage() {
  return <StaticKeywordPage slug="best-evolera-register" />;
}
