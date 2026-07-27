import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-baiak-server-chile');
}

export default function TibiaoriginsBaiakServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-baiak-server-chile" />;
}
