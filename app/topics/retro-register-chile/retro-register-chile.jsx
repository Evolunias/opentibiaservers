import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-register-chile');
}

export default function RetroRegisterChileKeywordPage() {
  return <StaticKeywordPage slug="retro-register-chile" />;
}
