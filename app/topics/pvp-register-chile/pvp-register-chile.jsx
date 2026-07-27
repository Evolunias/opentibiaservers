import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-register-chile');
}

export default function PvpRegisterChileKeywordPage() {
  return <StaticKeywordPage slug="pvp-register-chile" />;
}
