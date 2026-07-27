import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-non-pvp-server-chile');
}

export default function ImperianicNonPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="imperianic-non-pvp-server-chile" />;
}
