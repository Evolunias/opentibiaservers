import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-evo-server-chile');
}

export default function MistOfDeathEvoServerChileKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-evo-server-chile" />;
}
