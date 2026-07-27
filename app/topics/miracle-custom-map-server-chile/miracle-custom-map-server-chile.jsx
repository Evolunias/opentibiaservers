import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-custom-map-server-chile');
}

export default function MiracleCustomMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="miracle-custom-map-server-chile" />;
}
