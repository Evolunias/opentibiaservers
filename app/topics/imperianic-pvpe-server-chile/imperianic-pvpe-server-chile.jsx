import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-pvpe-server-chile');
}

export default function ImperianicPvpeServerChileKeywordPage() {
  return <StaticKeywordPage slug="imperianic-pvpe-server-chile" />;
}
