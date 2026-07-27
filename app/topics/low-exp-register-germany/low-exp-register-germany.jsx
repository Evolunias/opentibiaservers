import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-register-germany');
}

export default function LowExpRegisterGermanyKeywordPage() {
  return <StaticKeywordPage slug="low-exp-register-germany" />;
}
