import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-non-pvp-server-chile');
}

export default function TibiaoriginsNonPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-non-pvp-server-chile" />;
}
