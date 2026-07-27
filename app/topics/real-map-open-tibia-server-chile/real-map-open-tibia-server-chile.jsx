import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-open-tibia-server-chile');
}

export default function RealMapOpenTibiaServerChileKeywordPage() {
  return <StaticKeywordPage slug="real-map-open-tibia-server-chile" />;
}
