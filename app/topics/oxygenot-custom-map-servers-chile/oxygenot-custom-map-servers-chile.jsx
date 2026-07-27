import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-custom-map-servers-chile');
}

export default function OxygenotCustomMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-custom-map-servers-chile" />;
}
