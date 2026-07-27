import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-register-europe');
}

export default function LowExpRegisterEuropeKeywordPage() {
  return <StaticKeywordPage slug="low-exp-register-europe" />;
}
