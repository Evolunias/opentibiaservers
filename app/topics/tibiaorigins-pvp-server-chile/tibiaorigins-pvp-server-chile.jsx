import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-pvp-server-chile');
}

export default function TibiaoriginsPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-pvp-server-chile" />;
}
