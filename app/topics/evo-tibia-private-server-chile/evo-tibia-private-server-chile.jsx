import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-tibia-private-server-chile');
}

export default function EvoTibiaPrivateServerChileKeywordPage() {
  return <StaticKeywordPage slug="evo-tibia-private-server-chile" />;
}
