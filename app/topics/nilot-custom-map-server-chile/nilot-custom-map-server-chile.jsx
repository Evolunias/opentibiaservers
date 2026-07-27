import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-custom-map-server-chile');
}

export default function NilotCustomMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="nilot-custom-map-server-chile" />;
}
