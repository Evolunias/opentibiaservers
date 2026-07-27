import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-non-pvp-server-chile');
}

export default function TibiantisNonPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-non-pvp-server-chile" />;
}
