import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-no-reset-server-chile');
}

export default function TibiaretroNoResetServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-no-reset-server-chile" />;
}
