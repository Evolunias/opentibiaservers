import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-pvpe-server-chile');
}

export default function NilotPvpeServerChileKeywordPage() {
  return <StaticKeywordPage slug="nilot-pvpe-server-chile" />;
}
