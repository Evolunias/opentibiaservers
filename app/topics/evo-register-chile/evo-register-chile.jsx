import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-register-chile');
}

export default function EvoRegisterChileKeywordPage() {
  return <StaticKeywordPage slug="evo-register-chile" />;
}
