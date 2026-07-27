import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-pvpe-server-chile');
}

export default function TibiaoriginsPvpeServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-pvpe-server-chile" />;
}
