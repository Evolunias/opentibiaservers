import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-forum-uk');
}

export default function RetroForumUkKeywordPage() {
  return <StaticKeywordPage slug="retro-forum-uk" />;
}
