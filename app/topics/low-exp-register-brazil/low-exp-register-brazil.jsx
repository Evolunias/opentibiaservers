import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-register-brazil');
}

export default function LowExpRegisterBrazilKeywordPage() {
  return <StaticKeywordPage slug="low-exp-register-brazil" />;
}
