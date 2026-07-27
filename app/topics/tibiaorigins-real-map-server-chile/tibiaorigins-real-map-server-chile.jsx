import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-real-map-server-chile');
}

export default function TibiaoriginsRealMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-real-map-server-chile" />;
}
