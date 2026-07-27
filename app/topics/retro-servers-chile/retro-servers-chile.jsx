import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-servers-chile');
}

export default function RetroServersChileKeywordPage() {
  return <StaticKeywordPage slug="retro-servers-chile" />;
}
