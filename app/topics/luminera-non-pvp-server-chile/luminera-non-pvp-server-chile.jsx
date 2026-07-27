import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-non-pvp-server-chile');
}

export default function LumineraNonPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="luminera-non-pvp-server-chile" />;
}
