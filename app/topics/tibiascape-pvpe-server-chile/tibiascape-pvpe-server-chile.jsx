import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-pvpe-server-chile');
}

export default function TibiascapePvpeServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-pvpe-server-chile" />;
}
