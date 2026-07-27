import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-evo-server-chile');
}

export default function NostaltherEvoServerChileKeywordPage() {
  return <StaticKeywordPage slug="nostalther-evo-server-chile" />;
}
