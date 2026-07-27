import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-pvpe-server-chile');
}

export default function CyntaraPvpeServerChileKeywordPage() {
  return <StaticKeywordPage slug="cyntara-pvpe-server-chile" />;
}
