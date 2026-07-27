import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-open-tibia-server-chile');
}

export default function CustomMapOpenTibiaServerChileKeywordPage() {
  return <StaticKeywordPage slug="custom-map-open-tibia-server-chile" />;
}
