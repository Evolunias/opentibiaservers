import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-real-map-servers-chile');
}

export default function NilotRealMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="nilot-real-map-servers-chile" />;
}
