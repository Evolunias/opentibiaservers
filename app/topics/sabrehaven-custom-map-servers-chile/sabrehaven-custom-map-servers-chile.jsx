import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-custom-map-servers-chile');
}

export default function SabrehavenCustomMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-custom-map-servers-chile" />;
}
