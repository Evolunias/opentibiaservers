import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-register-europe');
}

export default function HighExpRegisterEuropeKeywordPage() {
  return <StaticKeywordPage slug="high-exp-register-europe" />;
}
