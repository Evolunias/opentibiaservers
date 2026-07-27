import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-custom-map-servers-chile');
}

export default function ImperianicCustomMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="imperianic-custom-map-servers-chile" />;
}
