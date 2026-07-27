import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-seasonal-server-chile');
}

export default function CyntaraSeasonalServerChileKeywordPage() {
  return <StaticKeywordPage slug="cyntara-seasonal-server-chile" />;
}
