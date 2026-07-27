import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-register-mexico');
}

export default function LowExpRegisterMexicoKeywordPage() {
  return <StaticKeywordPage slug="low-exp-register-mexico" />;
}
