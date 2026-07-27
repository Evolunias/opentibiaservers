import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-register-poland');
}

export default function LowExpRegisterPolandKeywordPage() {
  return <StaticKeywordPage slug="low-exp-register-poland" />;
}
