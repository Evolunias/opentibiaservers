import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-pvpe-server-chile');
}

export default function SabrehavenPvpeServerChileKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-pvpe-server-chile" />;
}
