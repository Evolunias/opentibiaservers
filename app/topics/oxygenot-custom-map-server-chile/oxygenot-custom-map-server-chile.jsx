import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-custom-map-server-chile');
}

export default function OxygenotCustomMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-custom-map-server-chile" />;
}
