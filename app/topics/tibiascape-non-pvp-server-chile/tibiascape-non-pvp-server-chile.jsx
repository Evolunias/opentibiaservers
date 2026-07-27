import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-non-pvp-server-chile');
}

export default function TibiascapeNonPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-non-pvp-server-chile" />;
}
