import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-custom-map-servers-chile');
}

export default function NilotCustomMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="nilot-custom-map-servers-chile" />;
}
