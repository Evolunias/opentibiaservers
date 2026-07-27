import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-register-sweden');
}

export default function LowExpRegisterSwedenKeywordPage() {
  return <StaticKeywordPage slug="low-exp-register-sweden" />;
}
