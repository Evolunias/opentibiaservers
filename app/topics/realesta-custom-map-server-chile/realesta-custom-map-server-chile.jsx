import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-custom-map-server-chile');
}

export default function RealestaCustomMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="realesta-custom-map-server-chile" />;
}
