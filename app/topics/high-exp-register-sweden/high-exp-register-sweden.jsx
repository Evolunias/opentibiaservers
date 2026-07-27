import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-register-sweden');
}

export default function HighExpRegisterSwedenKeywordPage() {
  return <StaticKeywordPage slug="high-exp-register-sweden" />;
}
