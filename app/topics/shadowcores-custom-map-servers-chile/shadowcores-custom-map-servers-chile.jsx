import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-custom-map-servers-chile');
}

export default function ShadowcoresCustomMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-custom-map-servers-chile" />;
}
