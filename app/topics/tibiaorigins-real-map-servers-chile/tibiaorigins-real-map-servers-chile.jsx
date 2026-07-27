import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-real-map-servers-chile');
}

export default function TibiaoriginsRealMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-real-map-servers-chile" />;
}
