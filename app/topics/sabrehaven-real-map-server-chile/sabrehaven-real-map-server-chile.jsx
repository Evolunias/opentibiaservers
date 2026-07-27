import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-real-map-server-chile');
}

export default function SabrehavenRealMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-real-map-server-chile" />;
}
