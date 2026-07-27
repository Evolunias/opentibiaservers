import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-real-map-servers-chile');
}

export default function OxygenotRealMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-real-map-servers-chile" />;
}
