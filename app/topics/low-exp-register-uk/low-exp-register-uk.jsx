import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-register-uk');
}

export default function LowExpRegisterUkKeywordPage() {
  return <StaticKeywordPage slug="low-exp-register-uk" />;
}
