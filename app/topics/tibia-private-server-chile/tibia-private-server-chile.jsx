import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-private-server-chile');
}

export default function TibiaPrivateServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibia-private-server-chile" />;
}
