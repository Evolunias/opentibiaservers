import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-real-map-server-chile');
}

export default function CyntaraRealMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="cyntara-real-map-server-chile" />;
}
