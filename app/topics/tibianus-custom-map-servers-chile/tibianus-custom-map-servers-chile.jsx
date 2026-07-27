import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-custom-map-servers-chile');
}

export default function TibianusCustomMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="tibianus-custom-map-servers-chile" />;
}
