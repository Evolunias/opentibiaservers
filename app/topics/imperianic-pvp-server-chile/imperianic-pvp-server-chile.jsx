import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-pvp-server-chile');
}

export default function ImperianicPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="imperianic-pvp-server-chile" />;
}
