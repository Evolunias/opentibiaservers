import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-forum-europe');
}

export default function RetroForumEuropeKeywordPage() {
  return <StaticKeywordPage slug="retro-forum-europe" />;
}
