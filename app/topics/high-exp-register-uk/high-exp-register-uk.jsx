import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-register-uk');
}

export default function HighExpRegisterUkKeywordPage() {
  return <StaticKeywordPage slug="high-exp-register-uk" />;
}
