import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-server-list-chile');
}

export default function RetroServerListChileKeywordPage() {
  return <StaticKeywordPage slug="retro-server-list-chile" />;
}
