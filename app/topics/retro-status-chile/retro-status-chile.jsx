import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-status-chile');
}

export default function RetroStatusChileKeywordPage() {
  return <StaticKeywordPage slug="retro-status-chile" />;
}
