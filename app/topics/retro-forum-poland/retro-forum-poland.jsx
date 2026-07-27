import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-forum-poland');
}

export default function RetroForumPolandKeywordPage() {
  return <StaticKeywordPage slug="retro-forum-poland" />;
}
