import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-real-map-servers-chile');
}

export default function CyntaraRealMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="cyntara-real-map-servers-chile" />;
}
