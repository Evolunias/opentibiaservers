import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-custom-map-servers-chile');
}

export default function UnlineCustomMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="unline-custom-map-servers-chile" />;
}
