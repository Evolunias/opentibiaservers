import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-evo-server-chile');
}

export default function OlderaEvoServerChileKeywordPage() {
  return <StaticKeywordPage slug="oldera-evo-server-chile" />;
}
