import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-baiak-server-chile');
}

export default function TibiaretroBaiakServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-baiak-server-chile" />;
}
