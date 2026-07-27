import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-forum-argentina');
}

export default function RetroForumArgentinaKeywordPage() {
  return <StaticKeywordPage slug="retro-forum-argentina" />;
}
