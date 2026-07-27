import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-custom-map-server-chile');
}

export default function TibiaoriginsCustomMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-custom-map-server-chile" />;
}
