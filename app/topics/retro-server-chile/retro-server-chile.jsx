import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-server-chile');
}

export default function RetroServerChileKeywordPage() {
  return <StaticKeywordPage slug="retro-server-chile" />;
}
