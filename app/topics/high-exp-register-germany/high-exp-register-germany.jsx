import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-register-germany');
}

export default function HighExpRegisterGermanyKeywordPage() {
  return <StaticKeywordPage slug="high-exp-register-germany" />;
}
