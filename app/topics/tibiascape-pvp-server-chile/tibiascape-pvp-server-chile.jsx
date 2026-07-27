import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-pvp-server-chile');
}

export default function TibiascapePvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-pvp-server-chile" />;
}
