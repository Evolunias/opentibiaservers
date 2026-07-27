import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-register-chile');
}

export default function NoResetRegisterChileKeywordPage() {
  return <StaticKeywordPage slug="no-reset-register-chile" />;
}
