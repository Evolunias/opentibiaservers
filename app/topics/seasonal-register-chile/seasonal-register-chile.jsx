import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-register-chile');
}

export default function SeasonalRegisterChileKeywordPage() {
  return <StaticKeywordPage slug="seasonal-register-chile" />;
}
