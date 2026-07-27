import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-evo-server-chile');
}

export default function TibiaoriginsEvoServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-evo-server-chile" />;
}
