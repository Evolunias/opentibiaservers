import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-register-brazil');
}

export default function HighExpRegisterBrazilKeywordPage() {
  return <StaticKeywordPage slug="high-exp-register-brazil" />;
}
