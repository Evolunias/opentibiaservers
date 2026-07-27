import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-register-argentina');
}

export default function HighExpRegisterArgentinaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-register-argentina" />;
}
