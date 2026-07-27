import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-custom-map-server-chile');
}

export default function CyntaraCustomMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="cyntara-custom-map-server-chile" />;
}
