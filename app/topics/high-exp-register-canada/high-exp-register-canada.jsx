import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-register-canada');
}

export default function HighExpRegisterCanadaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-register-canada" />;
}
