import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-register-mexico');
}

export default function HighExpRegisterMexicoKeywordPage() {
  return <StaticKeywordPage slug="high-exp-register-mexico" />;
}
