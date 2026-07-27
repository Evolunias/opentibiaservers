import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-pvpe-server-chile');
}

export default function NostaltherPvpeServerChileKeywordPage() {
  return <StaticKeywordPage slug="nostalther-pvpe-server-chile" />;
}
