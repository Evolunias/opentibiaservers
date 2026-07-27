import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-register-chile');
}

export default function PvpeRegisterChileKeywordPage() {
  return <StaticKeywordPage slug="pvpe-register-chile" />;
}
