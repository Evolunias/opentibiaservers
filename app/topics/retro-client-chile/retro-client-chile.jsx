import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-client-chile');
}

export default function RetroClientChileKeywordPage() {
  return <StaticKeywordPage slug="retro-client-chile" />;
}
