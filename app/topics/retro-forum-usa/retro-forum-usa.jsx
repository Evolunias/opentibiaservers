import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-forum-usa');
}

export default function RetroForumUsaKeywordPage() {
  return <StaticKeywordPage slug="retro-forum-usa" />;
}
