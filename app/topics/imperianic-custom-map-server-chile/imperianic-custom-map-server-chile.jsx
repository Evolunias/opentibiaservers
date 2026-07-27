import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-custom-map-server-chile');
}

export default function ImperianicCustomMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="imperianic-custom-map-server-chile" />;
}
