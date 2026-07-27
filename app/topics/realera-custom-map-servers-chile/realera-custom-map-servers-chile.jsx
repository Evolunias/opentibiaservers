import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-custom-map-servers-chile');
}

export default function RealeraCustomMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="realera-custom-map-servers-chile" />;
}
