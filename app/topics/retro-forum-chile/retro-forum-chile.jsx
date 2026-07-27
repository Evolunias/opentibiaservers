import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-forum-chile');
}

export default function RetroForumChileKeywordPage() {
  return <StaticKeywordPage slug="retro-forum-chile" />;
}
