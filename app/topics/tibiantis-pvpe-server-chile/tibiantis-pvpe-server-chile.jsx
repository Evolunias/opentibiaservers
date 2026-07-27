import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-pvpe-server-chile');
}

export default function TibiantisPvpeServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-pvpe-server-chile" />;
}
