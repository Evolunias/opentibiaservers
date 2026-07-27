import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-evo-server-chile');
}

export default function ThorniaEvoServerChileKeywordPage() {
  return <StaticKeywordPage slug="thornia-evo-server-chile" />;
}
