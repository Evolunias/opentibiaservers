import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-custom-map-servers-chile');
}

export default function TibiaoriginsCustomMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-custom-map-servers-chile" />;
}
