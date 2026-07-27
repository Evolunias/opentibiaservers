import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-custom-map-server-chile');
}

export default function MadnessaliveCustomMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-custom-map-server-chile" />;
}
