import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-custom-map-server-chile');
}

export default function SabrehavenCustomMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-custom-map-server-chile" />;
}
