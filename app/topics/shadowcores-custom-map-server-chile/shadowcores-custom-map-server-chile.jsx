import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-custom-map-server-chile');
}

export default function ShadowcoresCustomMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-custom-map-server-chile" />;
}
