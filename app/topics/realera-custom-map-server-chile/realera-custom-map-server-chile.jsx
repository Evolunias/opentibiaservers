import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-custom-map-server-chile');
}

export default function RealeraCustomMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="realera-custom-map-server-chile" />;
}
