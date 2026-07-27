import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-register-poland');
}

export default function HighExpRegisterPolandKeywordPage() {
  return <StaticKeywordPage slug="high-exp-register-poland" />;
}
