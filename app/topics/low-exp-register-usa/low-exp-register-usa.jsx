import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-register-usa');
}

export default function LowExpRegisterUsaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-register-usa" />;
}
