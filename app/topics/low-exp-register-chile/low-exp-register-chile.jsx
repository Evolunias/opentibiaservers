import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-register-chile');
}

export default function LowExpRegisterChileKeywordPage() {
  return <StaticKeywordPage slug="low-exp-register-chile" />;
}
