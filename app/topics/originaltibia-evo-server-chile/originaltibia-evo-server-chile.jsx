import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-evo-server-chile');
}

export default function OriginaltibiaEvoServerChileKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-evo-server-chile" />;
}
