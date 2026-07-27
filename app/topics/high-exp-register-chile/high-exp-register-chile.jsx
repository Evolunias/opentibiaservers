import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-register-chile');
}

export default function HighExpRegisterChileKeywordPage() {
  return <StaticKeywordPage slug="high-exp-register-chile" />;
}
