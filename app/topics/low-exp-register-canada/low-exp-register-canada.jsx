import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-register-canada');
}

export default function LowExpRegisterCanadaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-register-canada" />;
}
