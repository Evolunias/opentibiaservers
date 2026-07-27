import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-register-argentina');
}

export default function LowExpRegisterArgentinaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-register-argentina" />;
}
