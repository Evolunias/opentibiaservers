import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-register-usa');
}

export default function HighExpRegisterUsaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-register-usa" />;
}
