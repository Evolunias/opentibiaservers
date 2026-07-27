import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-evo-server-chile');
}

export default function TibianusEvoServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibianus-evo-server-chile" />;
}
