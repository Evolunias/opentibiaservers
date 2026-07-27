import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-custom-map-servers-chile');
}

export default function MiracleCustomMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="miracle-custom-map-servers-chile" />;
}
