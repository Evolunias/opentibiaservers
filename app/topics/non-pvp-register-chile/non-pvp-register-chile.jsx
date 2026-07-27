import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-register-chile');
}

export default function NonPvpRegisterChileKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-register-chile" />;
}
