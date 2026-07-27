import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-evo-server-chile');
}

export default function ElderaEvoServerChileKeywordPage() {
  return <StaticKeywordPage slug="eldera-evo-server-chile" />;
}
